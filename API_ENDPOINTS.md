# توثيق كل الـ API Endpoints في الموقع

> ملف مرجعي لكل طلب شبكة (HTTP) بيخرج من الموقع: الـ URL، الـ Payload، شكل الـ Response، ومكانه في الكود، وبيعمل إيه بالظبط.
>
> **ملاحظة مهمة عن الـ Response:** المشروع ده Frontend فقط (مافيش `route.js` أو API routes داخلية في Next.js — كل الطلبات بتروح لباك إند خارجي). عشان كده أشكال الـ Response الموثّقة تحت **مستنتجة من الحقول اللي الكود فعلاً بيقراها**، مش من عقد رسمي للـ Backend. الحقول المذكورة هي المضمون إن الفرونت بيعتمد عليها.

---

## 1. الـ Base URLs والبيئات

| المتغيّر | القيمة الافتراضية (لو مش متظبط) | dev | production |
|---|---|---|---|
| `NEXT_PUBLIC_ZEFAAF_API_URL` | `https://api.dev.zefaafapi.com` | `https://api.dev.zefaafapi.com` | `https://dev-api.zefaafapi.com` (من `deploy-prod.yml`) |
| `NEXT_PUBLIC_SEO_API_URL` | `https://seo.dev.zefaafapi.com/api/v1/public` (لو NODE_ENV != production) | `https://seo.dev.zefaafapi.com/api/v1/public` | `https://seo.zefaafapi.com/api/v1/public` |
| `NEXT_PUBLIC_REWAQ_URL` | `https://rewaq.nl` (أو `https://dev.rewaq.nl` على localhost/dev) | `https://dev.rewaq.nl` | `https://rewaq.nl` |
| `NEXT_PUBLIC_TECHFLOW_URL` | `https://tech-flow.nl` (أو `https://dev.tech-flow.nl` على localhost/dev) | `https://dev.tech-flow.nl` | `https://tech-flow.nl` |
| `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` | — | مضبوط في `.env.local` | مضبوط في الاستضافة |

> ⚠️ **ملاحظة:** `deploy-prod.yml` بيحطّ `NEXT_PUBLIC_ZEFAAF_API_URL=https://dev-api.zefaafapi.com` — يعني الـ production build بيتكلم مع دومين اسمه `dev-api`. ده شكله سهو في ملف الـ CI ومحتاج مراجعة.

الأنظمة الخارجية اللي الموقع بيكلمها:

1. **Zefaaf Main API** — `api.dev.zefaafapi.com` — كل بيانات الموقع (بلاد، تسجيل، دفع، فعاليات، VIP).
2. **SEO Dashboard API** — `seo.zefaafapi.com/api/v1/public` — المدوّنة (Blogs) فقط.
3. **Staging API** — `staging.zefaafapi.com` — مكتوب hardcoded في مكان واحد قديم (تفاصيل تحت).
4. **BigDataCloud** — reverse geocoding مجاني بدون مفتاح.
5. **Mapbox** — خرائط الفعاليات (المكتبة بتعمل الطلبات لوحدها).
6. **TechFlow / Rewaq** — مش HTTP، تسليم بيانات عبر `postMessage` بين التابّات.

---

## 2. الـ Instances والـ Headers الافتراضية

### 2.1 `instanceAxios` — الـ instance الأساسي
📁 [src/app/[locale]/instance/instanceAxios.jsx](src/app/[locale]/instance/instanceAxios.jsx)

```js
axios.create({ baseURL: process.env.NEXT_PUBLIC_ZEFAAF_API_URL || "https://api.dev.zefaafapi.com" })
```

بيضيف تلقائيًا على **كل طلب**:

| Header | القيمة |
|---|---|
| `Accept-Language` | اللغة الحالية (`ar` افتراضيًا) |
| `Authorization` | `Bearer <localStorage.token>` — لو فيه توكن مخزّن فقط |

- `export default instance` → instance جاهز بلغة `ar`.
- `createAxiosInstance(locale)` → لإنشاء instance بلغة معيّنة (بتستخدمه صفحات VIP والفعاليات).

### 2.2 `EndpointStore` — instance بديل مبني على `fetch`
📁 [src/app/[locale]/store/EndpointStore.jsx:10-38](src/app/[locale]/store/EndpointStore.jsx#L10-L38)

نفس الفكرة بالظبط لكن بـ `fetch` بدل axios (عشان تقليل حجم الـ bundle). بيضيف نفس الـ headers + `Content-Type: application/json` لو فيه body، وبيرمي `Error` فيه `.status` و`.response` لو الرد مش OK.

---

## 3. Zefaaf Main API

### 3.1 بيانات مرجعية (Lookups)

---

#### `GET /api/getAllCountries`
**بتعمل إيه:** بتجيب قائمة كل الدول المتاحة — تُستخدَم في: dropdown الدولة في فورم الزواج العادي والذكي، فورم حجز الفعاليات، وفلو الدفع في VIP (لتحويل ISO code → country_id).

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/getAllCountries` |
| **Method** | GET |
| **Payload** | لا يوجد |
| **Headers** | `Accept-Language`, `Authorization` (اختياري) |

**Response (الحقول المستخدمة):**
```jsonc
{
  "data": [
    {
      "id": 1,
      "name": "مصر",
      "iso_code": "EG",        // أحيانًا بيتقرأ كـ iso2 كـ fallback
      "dialing_code": "20",
      "flag_url": "https://..."
    }
  ]
}
```
> الكود بيقبل كمان `response.data` كـ array مباشرة (بدون غلاف `data`) — fallback في [useMarriageOptions.js:82](src/features/marriage-registration/hooks/useMarriageOptions.js#L82).

**أماكن الاستدعاء:**
- [useMarriageOptions.js:81](src/features/marriage-registration/hooks/useMarriageOptions.js#L81) — فورم الزواج (العادي + الذكي)
- [EventDetailsContact.jsx:174](src/app/[locale]/Components/event-details/EventDetailsContact.jsx#L174) — فورم حجز الفعالية، ومعاه **retry بلغة `en`** ([السطر 185](src/app/[locale]/Components/event-details/EventDetailsContact.jsx#L185)) لو الأسماء رجعت فاضية باللغة الحالية، وبعدها fallback لقائمة دول ثابتة في الكود
- [useVipSearchAccessFlow.js:66](src/features/vip-search-service/hooks/useVipSearchAccessFlow.js#L66) — تحويل كود الدولة المكتشف (GPS/timezone) لـ `country_id` قبل استدعاء سعر VIP
- [VipPaymentFlowButton.jsx:136](src/features/vip-search-service/components/paymentFlow/VipPaymentFlowButton.jsx#L136) — dropdown الدولة في dialog بيانات العميل

---

#### `GET /api/getAllNationalities`
**بتعمل إيه:** قائمة الجنسيات لـ dropdown الجنسية في فورمات التسجيل.

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/getAllNationalities` |
| **Method** | GET |
| **Payload** | لا يوجد |

**Response:**
```jsonc
{ "data": [ { "id": 1, "name": "مصري" } ] }
```

**أماكن الاستدعاء:** [useMarriageOptions.js:94](src/features/marriage-registration/hooks/useMarriageOptions.js#L94)، [RegisterContext.jsx:505](src/app/[locale]/context/RegisterContext.jsx#L505)

---

#### `GET /api/country-governorates/{countryId}`
**بتعمل إيه:** بتجيب محافظات/مدن دولة معيّنة. بتتنادى **تلقائيًا كل ما المستخدم يغيّر الدولة**.

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/country-governorates/1` |
| **Method** | GET |
| **Payload** | `countryId` في المسار |

**Response:**
```jsonc
{ "data": [ { "id": 10, "name": "القاهرة" } ] }
// أو: { "governorates": [ ... ] }  ← الكود بيتعامل مع الشكلين
```
راجع [RegisterContext.jsx:634](src/app/[locale]/context/RegisterContext.jsx#L634) اللي بيقرأ `res.data.governorates || res.data?.data`.

**أماكن الاستدعاء:** [useMarriageOptions.js:110](src/features/marriage-registration/hooks/useMarriageOptions.js#L110)، [RegisterContext.jsx:632](src/app/[locale]/context/RegisterContext.jsx#L632)

---

#### `GET /api/get-user-options`
**بتعمل إيه:** أهم endpoint للـ lookups — **نداء واحد** بيرجّع كل الاختيارات الخاصة بالفورمات (حالة اجتماعية، تدين، تعليم، مستوى وظيفي… إلخ) **مقسّمة حسب النوع (male/female)**، بالإضافة لمجموعات مش مقسّمة بالنوع (المهر، السكن، الدخل الشهري، الذهب…).

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/get-user-options` |
| **Method** | GET |
| **Payload** | لا يوجد — التقسيم بيحصل في الفرونت |
| **Headers** | `Accept-Language` — **الـ labels بترجع مترجمة حسب اللغة** |

**Response:**
```jsonc
{
  "data": {
    // مقسّمة بالنوع — object بشكل { key: "الترجمة" }
    "marital_statuses":  { "male": { "single": "أعزب" }, "female": { "single": "آنسة" } },
    "religious_status":  { "male": {...}, "female": {...} },
    "education_levels":  { "male": {...}, "female": {...} },
    "job_grades":        { "male": {...}, "female": {...} },
    "health_status":     { "male": {...}, "female": {...} },
    "genders":           { "male": "ذكر", "female": "أنثى" },

    // غير مقسّمة بالنوع
    "marriage_types":          { "first_marriage": "زواج أول" },
    "dowry":                   { ... },
    "housing_status":          { ... },
    "monthly_income":          { ... },
    "gold":                    { ... },
    "marriage_requirements":   { ... },
    "job_stability":           { ... }
  }
}
```

**ملاحظات على تعامل الكود مع الرد:**
- الكود بيقبل تسميات بديلة لنفس الحقل (`marital_status` أو `marital_statuses`، `education_level` أو `education_levels`، `job_grade` أو `job_grades`) — [useMarriageOptions.js:192-218](src/features/marriage-registration/hooks/useMarriageOptions.js#L192-L218).
- بيقبل الحقول على مستوى `data` **أو** على مستوى الجذر مباشرة.
- بيحوّل `{ key: label }` إلى `[{ value, label }]` عن طريق `transformOptionsObject`.
- بيحتفظ بنسخة `rawUserOptions` عشان يقدر يعمل **عكس الترجمة** (من الـ label العربي → الـ key) عند الإرسال — دوال `labelToKey` / `labelsToKeys`.
- في إعادة تسمية محلية لبعض labels نوع الزواج بالعربي فقط ([`MARRIAGE_TYPE_LABEL_REMAP`](src/features/marriage-registration/hooks/useMarriageOptions.js#L121)).
- ⚠️ [RegisterContext.jsx:557+](src/app/[locale]/context/RegisterContext.jsx#L557) بيدخل على `data.job_grades[genderValue]` **من غير optional chaining** — لو الـ endpoint فشل أو غيّر الشكل، الكومبوننت بيرمي exception.

---

#### `GET /api/bad-words`
**بتعمل إيه:** بتجيب قائمة الكلمات الممنوعة، والفرونت بيستخدمها لمنع المستخدم من كتابتها في حقول الوصف (`description_user` / `description_partner`) قبل الإرسال.

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/bad-words` |
| **Method** | GET |
| **Payload** | لا يوجد |

**Response:**
```jsonc
{ "data": ["كلمة1", "كلمة2"] }   // array of strings
```
بيتعمل لها `.trim().toLowerCase()` بعد الاستقبال.

**مكان الاستدعاء:** [RegisterContext.jsx:19](src/app/[locale]/context/RegisterContext.jsx#L19) — عند تحميل الـ Provider.

---

#### `GET /api/success-stories`
**بتعمل إيه:** بتجيب قصص النجاح المعروضة في سلايدر صفحة "قصص النجاح" وصفحة "من نحن".

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/success-stories` |
| **Method** | GET |
| **Payload** | لا يوجد |

**Response:**
```jsonc
{ "data": [ { /* بيانات القصة */ } ] }
```

**أماكن الاستدعاء:** [Success-stories/SuccessStore.jsx:19](src/app/[locale]/Components/Success-stories/SuccessStore.jsx#L19)، [About/SuccessStore.jsx:18](src/app/[locale]/Components/About/SuccessStore.jsx#L18)

---

### 3.2 التواصل والاشتراك

---

#### `POST /api/contact-us`
**بتعمل إيه:** إرسال رسالة "اتصل بنا".

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/contact-us` |
| **Method** | POST |
| **Content-Type** | `application/json` |

**Payload:**
```json
{
  "name": "محمد",
  "email": "user@example.com",
  "message": "نص الرسالة"
}
```

**Response:** الكود **بيتجاهل جسم الرد تمامًا** — بيعتمد على نجاح/فشل الطلب فقط (`await instance.post(...)` جوه `try/catch`) ويعرض رسالة ترجمة ثابتة.

**مكان الاستدعاء:** [ContactForm.jsx:23](src/app/[locale]/Components/Contact%20US/ContactForm.jsx#L23)

---

#### `POST /api/newsletter/subscribe`
**بتعمل إيه:** اشتراك في النشرة البريدية. **متكرّر في 4 أماكن بنفس الكود** (الفوتر القديم، فوتر HomeV2، وقائمة الخدمات في نسختين من الـ Navbar).

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/newsletter/subscribe` |
| **Method** | POST |

**Payload:**
```json
{ "email": "user@example.com" }
```
> التحقق من صيغة الإيميل بيحصل في الفرونت قبل الإرسال (`/\S+@\S+\.\S+/`).

**Response:** بيتقرأ منه `err.response.data.message` **فقط في حالة الخطأ** لعرضه للمستخدم؛ رد النجاح بيتجاهله.

**أماكن الاستدعاء:**
- [Footer.jsx:133](src/app/[locale]/Components/Footer/Footer.jsx#L133)
- [HomeV2/sections/FooterSection.jsx:105](src/app/[locale]/Components/HomeV2/sections/FooterSection.jsx#L105)
- [HomeV2/NavbarV2/components/ServicesMegaMenuV2.jsx:87](src/app/[locale]/Components/HomeV2/NavbarV2/components/ServicesMegaMenuV2.jsx#L87)
- [Navbar/components/ServicesMenu.jsx:84](src/app/[locale]/Components/Navbar/components/ServicesMenu.jsx#L84)

---

### 3.3 حساب المستخدم

---

#### `GET /api/profile/me`
**بتعمل إيه:** بتجيب بروفايل المستخدم الحالي بناءً على التوكن. بتتنادى **مرة واحدة عند تحميل الموقع** — ومؤجّلة لـ `requestIdleCallback` (أو `setTimeout` 1.5 ثانية) عشان ما تعطّلش الـ FCP/LCP. لو مافيش توكن في `localStorage` الطلب مابيتبعتش أصلاً.

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/profile/me` |
| **Method** | GET |
| **Headers** | `Authorization: Bearer <token>` — **مطلوب** |

**Response:**
```jsonc
{ "user": { /* بيانات المستخدم */ } }
```

**التعامل مع 401:** بيمسح `token` و`userData` من `localStorage` ويعمل redirect للصفحة الرئيسية.

**مكان الاستدعاء:** [EndpointStore.jsx:96](src/app/[locale]/store/EndpointStore.jsx#L96)

---

#### `GET /api/profile/{id}?reset_is_new_for_liked=true`
**بتعمل إيه:** بتجيب بروفايل مستخدم آخر بالـ id. الـ query param `reset_is_new_for_liked=true` بيقول للباك إند يشيل علامة "جديد" عن الإعجاب.

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/profile/123?reset_is_new_for_liked=true` |
| **Method** | GET |
| **Headers** | `Authorization: Bearer <token>` |

**Response:** `{ "user": {...} }`

**مكان الاستدعاء:** [EndpointStore.jsx:77](src/app/[locale]/store/EndpointStore.jsx#L77) — دالة `getUserById` المتاحة عبر الـ context.

---

#### `POST /api/register/complete-registeration-info`
**بتعمل إيه:** إرسال بيانات التسجيل الكامل (الفلو القديم متعدد الخطوات، 17 خطوة). ده أضخم payload في الموقع، وبيتبعت كـ `multipart/form-data` علشان الصور.

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/register/complete-registeration-info` |
| **Method** | POST |
| **Content-Type** | `multipart/form-data` |
| **validateStatus** | `() => true` — أي status code بيتعامل معاه يدويًا، مش بيرمي |

**Payload (FormData) — مع mapping مهم من أسماء الفرونت لأسماء الباك:**

| مفتاح الفورم | المفتاح المُرسَل | ملاحظة التحويل |
|---|---|---|
| `country` (object) | `country_id` | بيتبعت `value.id` فقط |
| `governorate` (object) | `government_id` | ⚠️ لاحظ `government` مش `governorate` |
| `nationality` (object) | `nationality_id` | بيتبعت `value.id` |
| `dialing_code` | `dialing_code` | بيشيل الـ `+` من الأول |
| `image_ids` (array) | `image_ids[]` | كل عنصر بيتبعت كـ entry منفصل |
| `image_previews` | — | **بيتشال** ومابيتبعتش |
| باقي المفاتيح | نفس الاسم | `?? ""` لو null |

باقي الحقول اللي بتتبعت زي ما هي:
`user_name`, `email`, `phone`, `birth_date`, `gender`, `health_status`, `description_user`, `description_partner`, `job_grade`, `religious_status`, `education_level`, `marital_status`, `mental_status`

**Response:**
```jsonc
{ "message": "تم التسجيل بنجاح" }
```
- **200** → toast نجاح + الانتقال للخطوة الأخيرة (17)
- **غير 200** → toast خطأ برسالة `response.data.message`

**مكان الاستدعاء:** [RegisterContext.jsx:451](src/app/[locale]/context/RegisterContext.jsx#L451)

---

### 3.4 الزواج والدفع

---

#### `POST /api/marriage/create-checkout-session`
**بتعمل إيه:** إنشاء طلب زواج عادي + جلسة دفع. ده الـ endpoint الرئيسي لـ **الزواج العادي (Normal Marriage)** — وهو الخدمة الوحيدة اللي لسه بتدفع عن طريق TechFlow (باقي الخدمات اتنقلت لـ Rewaq).

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/marriage/create-checkout-session` |
| **Method** | POST |
| **Content-Type** | `application/json` |

**Payload (الحقول الأساسية — دايمًا موجودة):**
```jsonc
{
  "full_name": "محمد أحمد",
  "email": "user@example.com",          // أو "" لو فاضي
  "birth_date": "1995-01-01",
  "gender": "male",
  "communication_method": "phone",      // phone | whatsapp | telegram
  "user_phone": "1012345678",           // null لو الطريقة مش phone
  "telegram_username": null,            // القيمة فقط لو الطريقة telegram
  "country_id": 1,
  "nationality_id": 1,
  "governorate_id": 10,
  "marriage_type": "first_marriage",
  "marital_status": "single",
  "religious_status": "...",
  "education_level": "...",
  "job_grade": "...",
  "personality_traits": "نص حر",
  "partner_traits": "نص حر",
  "payment_method": "local_agent"       // إلزامي — فيه guard بيمنع الإرسال بدونه
}
```

**حقول اختيارية — بتتضاف فقط لو ليها قيمة (مش بتتبعت كـ null):**
```jsonc
{
  "preferred_min_age": 25,                    // Number
  "preferred_max_age": 35,                    // Number
  "preferred_country_ids": [1, 2],            // Number[]
  "preferred_nationality_ids": [1],           // Number[]
  "preferred_religious_status": ["..."],
  "preferred_education_levels": ["..."],
  "preferred_job_grades": ["..."],
  "preferred_marital_statuses": ["..."],

  "latitude": 30.04,     // فقط لو الاتنين موجودين (المستخدم سمح بالـ GPS)
  "longitude": 31.23,

  // فقط لو payment_method === "local_agent"
  "local_agent_id": 5,
  "local_agent_code": "ABC123"
}
```

**Response:**
```jsonc
{ /* بيتخزّن كله في responseData بدون قراءة حقول محدّدة */ }
```
في حالة الخطأ الكود بيقرأ بالترتيب: `data.message` → `data.error` → `err.message`، وبيرجّع `data.errors` (أخطاء التحقق per-field) لو موجودة.

**ملاحظة على الفلو:** الفورم بيعمل validation محلي بالكامل قبل الإرسال (`validateFormData`). ولو فيه `onPaymentModalOpen` handler، الفورم **بيفتح مودال الدفع بدل ما يبعت مباشرة** ([MarriageRegistrationForm.jsx:438](src/features/marriage-registration/components/MarriageRegistrationForm.jsx#L438)) — الإرسال الفعلي بيحصل من `submitWithPayment` بعد اختيار طريقة الدفع، وبيحقن `latitude`/`longitude` من `ipData` عند الإرسال.

**مكان الاستدعاء:** [useMarriageSubmission.js:114](src/features/marriage-registration/hooks/useMarriageSubmission.js#L114)

---

#### `POST /api/smart-marriage/create`
**بتعمل إيه:** إنشاء طلب **الزواج الذكي (Smart Marriage)**. نفس فكرة الـ endpoint اللي فوق لكن بحقول إضافية خاصة بالتوافق المادي، والحقول دي **بتختلف حسب النوع**.

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/smart-marriage/create` |
| **Method** | POST |
| **Content-Type** | `application/json` |

**Payload (الأساسي):**
```jsonc
{
  "full_name": "...",
  "email": "",
  "communication_method": "phone",
  "phone": "1012345678",           // ⚠️ اسمه "phone" هنا، مش "user_phone" زي الزواج العادي
  "telegram_username": null,
  "birth_date": "1995-01-01",
  "gender": "male",
  "country_id": 1,                 // Number(...) صراحةً
  "nationality_id": 1,             // Number(...)
  "marriage_type": "...",
  "marital_status": "...",
  "religious_status": "...",
  "education_level": "...",
  "job_grade": "...",
  "personality_traits": "...",
  "partner_traits": "...",
  "payment_method": "..."
}
```

**حقول شرطية:**

| الشرط | الحقول المضافة |
|---|---|
| `governorate_id` له قيمة | `governorate_id` (Number) |
| `latitude` و`longitude` الاتنين موجودين | `latitude`, `longitude` (Number) |
| **`gender === "male"`** | `dowry`, `housing_status`, `monthly_income`, `gold`, `marriage_requirements`, `job_stability` |
| **`gender === "female"`** | `pref_dowry`, `pref_housing_status`, `pref_monthly_income`, `pref_gold`, `pref_marriage_requirements`, `pref_job_stability` |
| `payment_method === "local_agent"` | `local_agent_id`, `local_agent_code` |

**حقول التفضيلات (بادئة `pref_` — تختلف عن `preferred_` في الزواج العادي):**
`pref_min_age` (Number), `pref_max_age` (Number), `pref_country_ids` (Number[]), `pref_nationality_ids` (Number[]), `pref_religious_statuses`, `pref_education_levels`, `pref_job_grades`, `pref_marital_statuses`

> ⚠️ **فرق مهم بين الفلوين:** الزواج العادي بيستخدم `preferred_*` و`user_phone`، والزواج الذكي بيستخدم `pref_*` و`phone`. مش نفس العقد.

**Response:** نفس تعامل الزواج العادي — بيتخزّن كامل في `responseData`، وقراءة `message`/`error`/`errors` عند الفشل.

**مكان الاستدعاء:** [useSmartMarriageSubmission.js:111](src/features/smart-marriage-registration/hooks/useSmartMarriageSubmission.js#L111)

---

### 3.5 الفعاليات (Events)

---

#### `GET /api/events`
**بتعمل إيه:** بتجيب كل الفعاليات المتاحة. **بتتنادى من السيرفر (Server Component)** بـ `cache: 'no-store'` — يعني بيانات طازة في كل request بدون كاش.

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/events` |
| **Method** | GET |
| **Headers** | `Accept: application/json`, `Accept-Language: {locale}` |
| **Cache** | `no-store` |

**Response:**
```jsonc
{
  "success": true,
  "data": [
    {
      "id": 1,
      "ulid": "01H...",
      "status": "active",              // canceled/cancelled = ملغاة
      "name": "اسم الفعالية",
      "description": "...",
      "banner_urls": ["https://..."],
      "date": "2026-10-01",
      "start_time": "18:00:00",
      "end_time": "21:00:00",
      "duration_hours": 3,             // أو بيتحسب من start/end
      "location": "العنوان",
      "latitude": "30.04",
      "longitude": "31.23",
      "maps_url": "https://...",
      "ticket_price": "500",
      "currency": "EGP",
      "terms": "الشروط",
      "accepting_registrations": true,
      "availability": {
        "state": "available",          // available | limited | sold_out
        "remaining": 42
      },
      "speakers": [
        { "id": 1, "name": "...", "description": "...",
          "image_url": "...", "sort_order": 1,
          "followers_count": 1000, "role": "..." }
      ]
    }
  ]
}
```
> لو الرد مش ملفوف في `{ success, data }`، الكود بيقبل الـ array مباشرة ([public-event.js:206](src/lib/events/public-event.js#L206)).

**دوال مبنية عليها:**
| الدالة | بتعمل إيه |
|---|---|
| `fetchPublicEvents(locale)` | القائمة الخام |
| `fetchAvailablePublicEvents(locale)` | فلترة على `accepting_registrations !== false` **و** `availability.state === "available"` |
| `fetchFirstPublicEvent(locale)` | أول فعالية صالحة للحجز (مش ملغاة/مش sold_out) — وإلا أول واحدة عندها `ulid` |

**التطبيع (Normalization):** `normalizePublicEvent()` بيحوّل snake_case → camelCase، بيفرمت التاريخ بـ `Intl.DateTimeFormat`، والسعر بـ `Intl.NumberFormat` بعملة الفعالية، وبيرتّب المتحدثين بـ `sort_order`.

**مكان الاستدعاء:** [public-event.js:184](src/lib/events/public-event.js#L184) — تُستخدَم في [HomeV2/page.jsx](src/app/[locale]/Page/HomeV2/page.jsx)

---

#### `GET /api/events/{ulid}`
**بتعمل إيه:** تفاصيل فعالية واحدة بالـ ULID — لصفحة `/events/[eventUlid]`.

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/events/01H2XYZ...` |
| **Method** | GET |
| **Headers** | `Accept: application/json`, `Accept-Language: {locale}` |
| **Cache** | `no-store` |

**Response:** `{ "success": true, "data": { /* نفس شكل عنصر الفعالية فوق */ } }`
لو `success !== true` أو `data` فاضي → بيرجّع `null` والصفحة بتتعامل معاها كـ not-found.

**مكان الاستدعاء:** [public-event.js:150](src/lib/events/public-event.js#L150)

---

#### `GET /api/events/registrations/{registrationId}/status`
**بتعمل إيه:** **Polling** لحالة الدفع بعد ما المستخدم يرجع من صفحة الدفع الخارجية (Rewaq). بيتنادى كل **3 ثواني** لحد ما يتأكد الدفع أو يتلغي.

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/events/registrations/{id}/status` |
| **Method** | GET |
| **التكرار** | كل 3000ms |
| **مصدر الـ id** | من الـ URL query، أو من `sessionStorage['zefaaf_event_registration:{ulid}']` |

**Response:**
```jsonc
{
  "data": {
    "is_confirmed": true,      // true → نجاح، إيقاف الـ polling، مسح التخزين
    "status": "paid"           // "canceled" → فشل بنوع "expired"
  }
}
```

**التعامل مع الحالات:**
| الحالة | النتيجة في الواجهة |
|---|---|
| `is_confirmed === true` | ✅ نجاح + مسح `sessionStorage` + إيقاف الـ polling |
| `status === "canceled"` | ❌ فشل بنوع `expired` |
| HTTP 404 | ❌ فشل بنوع `missingRegistration` |
| أي خطأ آخر | ❌ فشل بنوع `failed` |
| مافيش `registrationId` أصلاً | ❌ `missingRegistration` بدون أي طلب |

**مكان الاستدعاء:** [ClientTriggers.jsx:209](src/app/[locale]/Components/ClientTriggers.jsx#L209)

---

### 3.6 خدمة البحث الشخصي VIP

---

#### `GET /api/website/vip-personal-search/price`
**بتعمل إيه:** بتجيب سعر خدمة VIP **حسب دولة المستخدم ونوعه**، ومعاه **تفاصيل الحساب اللي المستخدم هيحوّل عليه** (وكيل محلي / بنك / Instapay). لو الرد مافيهوش أي وكيل، الواجهة بتتحوّل تلقائيًا لخيار الدفع عبر واتساب.

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/website/vip-personal-search/price` |
| **Method** | GET |
| **Query Params** | `country_id`, `gender` |
| **Headers** | `Accept-Language` |

**مثال:** `GET /api/website/vip-personal-search/price?country_id=1&gender=male`

**Response:**
```jsonc
{
  "success": true,
  "data": {
    "price": 1000,
    "currency": "EGP",
    "payment_details": {
      "payment_type": "instapay",     // بيحدّد اللوجو المعروض
      // أي مجموعة من الحقول دي حسب الدولة:
      "bank_name": "...",
      "account_holder": "...",
      "iban": "...",
      "ing_iban": "...",
      "agent_name": "...",
      "instapay_username": "...",
      "instapay_phone": "...",
      "instapay_link": "...",
      "payment_number": "...",
      "payment_link": "...",
      "link": "...",
      "agent_phone": "...",
      "agent_link": "..."
    }
  }
}
```
> ترتيب عرض حقول `payment_details` في الواجهة ثابت ومعرّف في [`PAYMENT_DETAIL_FIELDS`](src/features/vip-search-service/components/paymentFlow/BankTransferDialog.jsx#L22) — الحقول الفاضية بتتخفي. ودالة `hasVipPaymentAgent()` بتحدّد هل فيه وكيل أصلاً ولا الفلو يتحوّل لواتساب.

**أماكن الاستدعاء:**
- [vipPersonalSearchApi.js:10](src/features/vip-search-service/utils/vipPersonalSearchApi.js#L10) — الـ wrapper الرسمي (بيرجّع `null` عند أي فشل)
- [VipPageHero.jsx:50](src/features/vip-search-service/components/VipPageHero.jsx#L50) — عرض السعر في الهيرو، **بيتنادى فقط لو `country_id` و`gender` موجودين في الـ query string** (زيارة مباشرة للصفحة = مافيش طلب ومافيش سعر معروض)
- [BankTransferDialog.jsx:17,72](src/features/vip-search-service/components/paymentFlow/BankTransferDialog.jsx#L17) — مرجع في التعليقات

---

#### `GET /api/vip-personal-search/whatsapp`
**بتعمل إيه:** بتجيب **رابط واتساب الدفع ديناميكيًا** (بدل ما يكون مكتوب hardcoded). ده الخيار البديل للدول اللي مافيهاش وكيل محلي.

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/vip-personal-search/whatsapp` |
| **Method** | GET |
| **Payload** | لا يوجد |

**Response:**
```jsonc
{ "success": true, "data": { "whatsapp_link": "https://wa.me/..." } }
```
لو `success !== true` أو أي خطأ → بيرجّع `null`.

**مكان الاستدعاء:** [vipPersonalSearchApi.js:22](src/features/vip-search-service/utils/vipPersonalSearchApi.js#L22)

---

#### `POST /api/vip-personal-search/transfer-proof`
**بتعمل إيه:** رفع **إثبات التحويل البنكي** لخدمة VIP مع بيانات العميل. ده الـ endpoint الوحيد في الموقع اللي بيرفع ملف من المستخدم مباشرةً.

| | |
|---|---|
| **URL** | `{ZEFAAF_API}/api/vip-personal-search/transfer-proof` |
| **Method** | POST |
| **Content-Type** | `multipart/form-data` |
| **validateStatus** | `() => true` — الحالة بتتفحص يدويًا |

**Payload (FormData):**

| المفتاح | القيمة | إلزامي |
|---|---|---|
| `full_name` | `details.name.trim()` | ✅ |
| `email` | `details.email.trim()` | ✅ |
| `phone` | أرقام فقط (`cleanPhoneDigits`) | ✅ |
| `dialing_code` | `+20` (بالـ `+`) أو `""` | ✅ |
| `gender` | `male` / `female` | ✅ |
| `country_id` | id الدولة المختارة | ✅ |
| `transfer_reference` | IBAN حساب المستخدم — **بيتضاف فقط لو مش فاضي** | ❌ |
| `transfer_proof` | ملف الصورة | ✅ |

**قيود الملف (مفروضة في الفرونت — مطابقة لعقد الـ endpoint):**
- الأنواع المسموحة: `image/jpeg`, `image/png`, `image/webp` فقط
- الحجم الأقصى: **5 MB**

**Response:**
```jsonc
{ "success": true }        // أو { "success": false, "message": "..." }
```
منطق النجاح في الكود: `status` بين 200–299 **و** `data.success !== false` → `{ ok: true }` والواجهة تنتقل لخطوة "التحقق". غير كده → `{ ok: false, message, status }`.

**أماكن الاستدعاء:** [vipPersonalSearchApi.js:32](src/features/vip-search-service/utils/vipPersonalSearchApi.js#L32) ← يُستدعى من [VipPaymentFlowButton.jsx:229](src/features/vip-search-service/components/paymentFlow/VipPaymentFlowButton.jsx#L229)

---

## 4. SEO Blog API (نظام منفصل)

الـ Base: `https://seo.zefaafapi.com/api/v1/public` (prod) — كل الطلبات دي **Server-side** مع ISR caching، ومن غير `Authorization`.

---

#### `GET /blogs`
**بتعمل إيه:** قائمة المقالات المنشورة لصفحة المدوّنة.

| | |
|---|---|
| **URL** | `{SEO_API}/blogs?page=1&limit=10&sortBy=publishedAt&sortOrder=desc&lang=ar` |
| **Method** | GET |
| **Headers** | `Accept: application/json` |
| **Cache** | ISR — `revalidate: 60` ثانية |

**Query Params:**

| Param | الافتراضي | ملاحظة |
|---|---|---|
| `page` | `1` | |
| `limit` | `10` | **بيتقصّ على 50 كحد أقصى** |
| `sortBy` | `publishedAt` | أو `createdAt` |
| `sortOrder` | `desc` | أو `asc` |
| `lang` | `ar` | بيتضاف فقط لو له قيمة |

**Response:**
```jsonc
{
  "success": true,
  "data": {
    "blogs": [
      {
        "id": 1, "slug": "...", "title": "...", "description": "...",
        "content": "markdown", "featuredImage": "...", "featuredImageAlt": "...",
        "metaTitle": "...", "metaDescription": "...",
        "publishedAt": "...", "createdAt": "...",
        "author": {...}, "language": {...},
        "availableLanguages": [...], "translationStatus": "..."
      }
    ],
    "pagination": { "page": 1, "limit": 10, "total": 100, "totalPages": 10 }
  }
}
```

**تعامل الكود مع اختلاف الشكل** — بيدوّر على المقالات في 4 أماكن بالترتيب ([blog-api.js:180-200](src/lib/blog-api.js#L180-L200)):
`data.data` (array مباشرة) → `data.data.blogs` → `data.data.items` → `data.data.results`

**سلسلة الـ Fallback للغة:** لو القائمة رجعت فاضية للغة المطلوبة، بيعيد الطلب بـ `lang=en`، وبعدها `lang=ar` (بيرجّع `fallbackLang` في النتيجة).

**حالة 429 (Rate limit):** بترجّع `{ blogs: [], meta: null, error: 'rate_limit' }` بدل ما ترمي exception.

**مكان الاستدعاء:** [blog-api.js:153](src/lib/blog-api.js#L153) ← [Page/Blogs/page.jsx](src/app/[locale]/Page/Blogs/page.jsx)

---

#### `GET /blogs/{slug}`
**بتعمل إيه:** جلب مقال واحد بالـ slug لصفحة تفاصيل المقال.

| | |
|---|---|
| **URL** | `{SEO_API}/blogs/my-article-slug?lang=ar` |
| **Method** | GET |
| **Cache** | ISR — `revalidate: 60` |

**استراتيجية الـ retry عند 404 (3 محاولات بالترتيب):**
1. بالـ `lang` المطلوب
2. **بدون** أي `lang` param (يخلي الـ API يقرّر)
3. بـ `lang=ar` كملاذ أخير

**Response:** بيقبل شكلين — `data.data` (فيه `id` مباشرة) أو `data.data.blog`. والمقال ممكن يرجع مطبوع مباشرةً أو بمصفوفة `translations[]` والكود بيختار أفضل ترجمة (`preferredLang` → `en` → `ar` → أول ترجمة متاحة).

**رموز الخطأ المرجعة للواجهة:** `'not_found'` (404 بعد كل المحاولات)، `'rate_limit'` (429)، `'no_translation'` (المقال موجود لكن مافيش ترجمة صالحة)

**مكان الاستدعاء:** [blog-api.js:273](src/lib/blog-api.js#L273) ← [Page/Blogs/[slug]/page.jsx](src/app/[locale]/Page/Blogs/[slug]/page.jsx)

---

#### `GET /languages`
**بتعمل إيه:** اللغات المتاحة في نظام المدوّنة.

| | |
|---|---|
| **URL** | `{SEO_API}/languages` |
| **Method** | GET |
| **Cache** | ISR — `revalidate: 3600` (ساعة) |

**Response:** `{ "success": true, "data": [ { "code": "ar", "name": "العربية" } ] }`

**مكان الاستدعاء:** [blog-api.js:349](src/lib/blog-api.js#L349)

> **خرائط اللغة:** `mapLocaleToApiLang()` بتحوّل locale الموقع للكود اللي الـ API فاهمه: `bn→bd`, `hi→in`, `ta→in`, `kk→kz`, `sq→al`, `ms→my`, `sw→ke`. أي locale تاني بيعدّي زي ما هو.

---

## 5. خدمات خارجية (Third-party)

---

#### `GET https://api.bigdatacloud.net/data/reverse-geocode-client`
**بتعمل إيه:** تحويل إحداثيات GPS الخام لاسم دولة/مدينة. **استثناء مقصود** من قاعدة "استخدم instanceAxios دايمًا" — لأنه دومين خارجي **ما ينفعش يستقبل الـ Bearer token أو `Accept-Language` بتوع التطبيق**، عشان كده بيستخدم `fetch` عادي.

| | |
|---|---|
| **URL** | `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=30.04&longitude=31.23&localityLanguage=en` |
| **Method** | GET |
| **Auth** | لا يوجد (keyless, CORS-enabled, مجاني تحت fair-use) |

**Query Params:** `latitude`, `longitude`, `localityLanguage` (افتراضي `en`)

**Response (الحقول المقروءة):**
```jsonc
{
  "countryCode": "EG",
  "countryName": "Egypt",
  "principalSubdivision": "Cairo Governorate",
  "city": "Cairo",          // أو "locality" كـ fallback
}
```

**عند أي فشل:** **مابيرميش أبدًا** — بيرجّع كائن فيه `latitude`/`longitude` فقط وباقي الحقول `null`، فالمستدعي دايمًا بياخد إحداثيات على الأقل.

**مكان الاستدعاء:** [reverseGeocode.js:47](src/lib/geo/reverseGeocode.js#L47)

---

#### Mapbox — `api.mapbox.com`
**بتعمل إيه:** خريطة موقع الفعالية. **مافيش طلب `fetch` مكتوب بإيدنا** — مكتبة `mapbox-gl` بتعمل طلبات الـ style والـ tiles لوحدها.

| | |
|---|---|
| **Style** | `mapbox://styles/mapbox/streets-v12` |
| **Token** | `process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` |
| **التحميل** | dynamic import — المكتبة مابتدخلش الـ bundle الأساسي |

**معالجة الأخطاء:** أخطاء الـ style/tiles بتحصل بشكل غير متزامن فبتتلقط عبر `map.on('error', ...)` — [EventDetailsMap.jsx:162](src/app/[locale]/Components/event-details/EventDetailsMap.jsx#L162)

---

## 6. ⚠️ استدعاءات Staging مكتوبة hardcoded

📁 [RegisterContext.jsx:500-506](src/app/[locale]/context/RegisterContext.jsx#L500-L506)

في `fetchInitialData` جوه `RegisterContext` فيه **نداءين لدومين staging مكتوب في الكود مباشرةً**، مش من متغيّر بيئة:

```js
axios.get("https://staging.zefaafapi.com/api/ip-info")
axios.get("https://staging.zefaafapi.com/api/getAllCountries", {
  headers: { "Accept-Language": "en" }
})
```

| الـ Endpoint | بيعمل إيه | Response المستخدَم |
|---|---|---|
| `GET https://staging.zefaafapi.com/api/ip-info` | كشف دولة المستخدم من الـ IP لتعبئة الدولة وكود الاتصال تلقائيًا | `{ country_name: "Egypt", calling_code: "20" }` |
| `GET https://staging.zefaafapi.com/api/getAllCountries` | نفس الـ endpoint العادي لكن بلغة `en` ثابتة عشان المطابقة النصية مع `country_name` تشتغل | `{ data: [...] }` |

**منطق المطابقة:** بياخد `country_name`، يعمله lowercase + trim، **يشيل كلمة "the"**، وبعدين يدوّر على دولة اسمها بيحتوي النص ده.

### 🔴 مشاكل معروفة هنا

1. **دومين staging في الـ production** — مش متحكوم فيه بمتغيّر بيئة، فالـ production بيضرب على staging.
2. **`/api/ip-info` متشال رسميًا من باقي الموقع** — اتبدل بـ [`resolveTier1()`](src/lib/geo/resolveTier1.js) اللي بيحدد الدولة من الـ timezone واللغة من `navigator.language` **بدون أي طلب شبكة وبدون إذن**. الملفين [UseStore.jsx:61](src/app/[locale]/store/UseStore.jsx#L61) و[EndpointStore.jsx:149](src/app/[locale]/store/EndpointStore.jsx#L149) فيهم تعليقات بتقول إن النداء ده اتشال — لكن `RegisterContext` لسه بينده عليه فعليًا.
3. **`ipRes.data.country_name` بيتقرأ بدون حماية** — لو الرد فشل، السطر `ipCountryName.replace(...)` هيرمي.

---

## 7. تسليم بيانات الدفع بين المواقع (postMessage — مش HTTP)

📁 [techFlowPayment.js](src/features/marriage-registration/utils/techFlowPayment.js) · [rewaqCheckoutHandoff.js](src/features/smart-marriage-registration/utils/rewaqCheckoutHandoff.js)

مش طلبات شبكة، لكنها **بيانات حسّاسة بتخرج من الموقع** فلازم توثيق. الآلية: فتح تاب جديد بـ `window.open` وتسليم بيانات الفورم عبر `postMessage` بعد ما التاب يبعت إشارة "جاهز".

### أنواع الرسائل (`PAYMENT_MSG`)

| الثابت | القيمة | الاتجاه |
|---|---|---|
| `READY` | `ZEFAAF_PAYMENT_READY` | TechFlow → Zefaaf |
| `FORM_DATA` | `ZEFAAF_PAYMENT_FORM_DATA` | Zefaaf → TechFlow |
| `ACK` | `ZEFAAF_PAYMENT_ACK` | TechFlow → Zefaaf |
| `EVENT_REGISTRATION` | `ZEFAAF_EVENT_REGISTRATION` | TechFlow → Zefaaf |
| `REWAQ_READY` | `REWAQ_HANDOFF_READY` | Rewaq → Zefaaf |
| `REWAQ_FORM_DATA` | `REWAQ_HANDOFF_FORM_DATA` | Zefaaf → Rewaq |
| `REWAQ_ACK` | `REWAQ_HANDOFF_ACK` | Rewaq → Zefaaf |

### 7.1 `openTechFlowPaymentTab()` — الزواج العادي فقط

**الوجهة:** `{TECHFLOW_URL}/?paymentFlow=1&lang={locale}&country={countryCode}&source={source}[&hideVisa=1]`

**الـ payload المُرسَل:**
```js
{ type: "ZEFAAF_PAYMENT_FORM_DATA", formData, countryCode, locale, source, hideVisa }
```

**آلية التسليم:** إعادة إرسال كل **500ms** لحد ما يوصل `ACK`، مع مهلة قصوى **30 دقيقة** يتشال بعدها الـ listener.

**الأمان:** بيتحقق من `event.source === paymentWindow` **و** إن الـ origin مطابق (`isAllowedTechFlowOrigin` / `isAllowedRewaqOrigin`) قبل أي تعامل مع الرسالة. localhost مسموح في التطوير.

**التقاط تسجيل الفعالية:** لما توصل رسالة `EVENT_REGISTRATION`، بيخزّن في `sessionStorage`:
```js
sessionStorage["zefaaf_event_registration:{eventUlid}"] = {
  registration_id, payment_id, created_at
}
```
ده اللي الـ polling في القسم 3.5 بيقرأ منه.

### 7.2 `openRewaqEventCheckoutTab()` — حجز الفعاليات

**الوجهة:** `{REWAQ_URL}/{locale}/events/{eventUlid}?handoff=partner`

**البيانات المُسلَّمة (من فورم حجز الفعالية):**
```jsonc
{
  "name": "محمد أحمد",
  "full_name": "محمد أحمد",
  "email": "user@example.com",
  "passport_number": "A1234567",
  "phone": "1012345678",              // أرقام فقط
  "dialing_code": "20",               // بدون +
  "country_id": 1,
  "ticket_quantity": 2,               // بين 1 و MAX_TICKET_QUANTITY
  "registration_source": "website",
  "event_ulid": "01H...",
  "event_id": 1,
  "event_name": "اسم الفعالية",
  "event_price": "EGP 1,000",         // نص مفرمت، مش رقم
  "terms_accepted": true
}
```
**تحقق إضافي:** بيرد فقط لو `event.data.eventUlid` بيطابق `formData.event_ulid` — يمنع تسليم بيانات لصفحة فعالية غلط.

**مكان الاستدعاء:** [EventDetailsContact.jsx:412](src/app/[locale]/Components/event-details/EventDetailsContact.jsx#L412) — بعد validation كامل للاسم/الإيميل/الباسبور/الموبايل/الدولة/الموافقة على الشروط.

### 7.3 `openRewaqSmartMarriageCheckoutTab()` — الزواج الذكي

**الوجهة:** `{REWAQ_URL}/{locale}/smart-marriage?handoff=partner`
**البيانات:** كل `formData` الزواج الذكي + `communication_method` + `country_code`
> مسار مختلف عن VIP (`?handoff=partner` على الصفحة الرئيسية) عمدًا — عشان الفلوين بيشتركوا في `country_id`/`gender` ولو كانوا على نفس الصفحة كان ممكن listener الـ VIP يقبل بيانات الزواج الذكي بالغلط.

---

## 8. جدول ملخّص لكل الـ Endpoints

| # | Method | Endpoint | النظام | Auth | Payload | بيعمل إيه |
|---|---|---|---|---|---|---|
| 1 | GET | `/api/getAllCountries` | Zefaaf | اختياري | — | قائمة الدول |
| 2 | GET | `/api/getAllNationalities` | Zefaaf | اختياري | — | قائمة الجنسيات |
| 3 | GET | `/api/country-governorates/{id}` | Zefaaf | اختياري | path | محافظات دولة |
| 4 | GET | `/api/get-user-options` | Zefaaf | اختياري | — | كل خيارات الفورمات (مقسّمة بالنوع) |
| 5 | GET | `/api/bad-words` | Zefaaf | اختياري | — | الكلمات الممنوعة |
| 6 | GET | `/api/success-stories` | Zefaaf | اختياري | — | قصص النجاح |
| 7 | POST | `/api/contact-us` | Zefaaf | اختياري | JSON | رسالة اتصل بنا |
| 8 | POST | `/api/newsletter/subscribe` | Zefaaf | اختياري | JSON | اشتراك النشرة |
| 9 | POST | `/api/register/complete-registeration-info` | Zefaaf | اختياري | multipart | التسجيل الكامل (17 خطوة) |
| 10 | POST | `/api/marriage/create-checkout-session` | Zefaaf | اختياري | JSON | طلب زواج عادي + دفع |
| 11 | POST | `/api/smart-marriage/create` | Zefaaf | اختياري | JSON | طلب زواج ذكي |
| 12 | GET | `/api/profile/me` | Zefaaf | **مطلوب** | — | بروفايل المستخدم الحالي |
| 13 | GET | `/api/profile/{id}` | Zefaaf | **مطلوب** | path + query | بروفايل مستخدم آخر |
| 14 | GET | `/api/events` | Zefaaf | اختياري | — | كل الفعاليات (SSR, no-store) |
| 15 | GET | `/api/events/{ulid}` | Zefaaf | اختياري | path | تفاصيل فعالية |
| 16 | GET | `/api/events/registrations/{id}/status` | Zefaaf | اختياري | path | **polling** كل 3 ثواني لحالة الدفع |
| 17 | GET | `/api/website/vip-personal-search/price` | Zefaaf | اختياري | query | سعر VIP + تفاصيل الحساب |
| 18 | GET | `/api/vip-personal-search/whatsapp` | Zefaaf | اختياري | — | رابط دفع واتساب |
| 19 | POST | `/api/vip-personal-search/transfer-proof` | Zefaaf | اختياري | multipart + ملف | رفع إثبات التحويل |
| 20 | GET | `/blogs` | SEO API | ❌ | query | قائمة المقالات (ISR 60s) |
| 21 | GET | `/blogs/{slug}` | SEO API | ❌ | path + query | مقال واحد (ISR 60s) |
| 22 | GET | `/languages` | SEO API | ❌ | — | لغات المدوّنة (ISR 1h) |
| 23 | GET | `/api/ip-info` | ⚠️ **Staging** | ❌ | — | كشف الدولة من الـ IP (قديم) |
| 24 | GET | `/api/getAllCountries` | ⚠️ **Staging** | ❌ | — | دول بلغة en (قديم) |
| 25 | GET | `reverse-geocode-client` | BigDataCloud | ❌ | query | إحداثيات → اسم مدينة/دولة |
| 26 | — | tiles / styles | Mapbox | token | — | خريطة الفعالية |

---

## 9. ملاحظات وتنبيهات مجمّعة

1. **مافيش API routes داخلية.** كل `/api/*` بيروح لدومين خارجي عبر الـ baseURL. الملف [src/app/robots.js:21](src/app/robots.js#L21) بيمنع فهرسة `/api/` — لكن مافيش مسارات فعلية تحتها في المشروع ده.
2. **`api.dev.zefaafapi.com` هو الافتراضي في كل مكان** — في **6 مواضع** الدومين ده مكتوب كـ fallback مباشرة في الكود، فلو `NEXT_PUBLIC_ZEFAAF_API_URL` ماتظبطش، الـ production هيضرب على dev بصمت.
3. **`deploy-prod.yml` بيحطّ `dev-api.zefaafapi.com` للـ production** — يحتاج مراجعة.
4. **نداءات staging المكتوبة hardcoded في `RegisterContext`** (القسم 6) — أعلى بند يستحق التنظيف.
5. **`REFACTORED_COMPONENTS/instanceAxios.jsx`** فيه نسخة قديمة مكتوب فيها `https://dev-api.zefaafapi.com/` — مجلد غير مستخدَم في البناء لكنه مصدر تشويش.
6. **`console.log` لبيانات API في الـ production:** [blog-api.js:169-170](src/lib/blog-api.js#L169-L170) و[public-event.js:175](src/lib/events/public-event.js#L175) بيطبعوا استجابات كاملة.
7. **تكرار كود الاشتراك في النشرة** في 4 كومبوننتس بنفس المنطق حرفيًا — مرشّح واضح للاستخراج في hook مشترك.
8. **اختلاف تسمية الحقول بين الزواج العادي والذكي** (`preferred_*` مقابل `pref_*`، و`user_phone` مقابل `phone`) — مصدر أخطاء محتمل عند أي مشاركة كود بين الفلوين.

---

*آخر تحديث: 2026-09-03 — مبني على فحص كل استدعاءات `fetch`/`axios` في مجلد `src/`.*


