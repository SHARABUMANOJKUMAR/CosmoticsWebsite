# API Specification & Mock Service Contracts

This frontend-only client project architecture isolates all data operations inside a typed Service Layer (`src/services/`). When transitioning to a production backend (Node.js/Python/Go/Firebase), replace the mock implementations in `src/services/` with real HTTP calls (`fetch` or `axios`) matching the contract below.

---

## 1. Contact Inquiry API

### `POST /api/contact`
Submits a customer or wholesale inquiry for the Bengaluru headquarters.

#### Request Headers
```http
Content-Type: application/json
```

#### Request Payload (`ContactInquiryPayload`)
```json
{
  "fullName": "Priya Sharma",
  "email": "priya.sharma@example.com",
  "phone": "+91 98765 43210",
  "subject": "Product recommendation query",
  "inquiryType": "Product Information",
  "message": "I would like to know if the Rose Gold Radiance Elixir is suitable for sensitive skin.",
  "privacyConsent": true
}
```

#### Field Validation Rules
- `fullName`: string, required, min 2 characters.
- `email`: string, required, valid RFC 5322 email regex.
- `phone`: string, required, Indian 10-digit mobile or +91 standard format.
- `subject`: string, required, min 3 characters.
- `inquiryType`: enum (`General Inquiry` | `Product Information` | `Business Collaboration` | `Other`), required.
- `message`: string, required, min 10 characters.
- `privacyConsent`: boolean, must be `true`.

#### Success Response (`200 OK`)
```json
{
  "success": true,
  "message": "Thank you for reaching out! Our Bengaluru beauty concierge has received your message and will respond within 24 hours.",
  "referenceId": "INQ-BLR-20261012-8821"
}
```

#### Error Response (`400 Bad Request`)
```json
{
  "success": false,
  "error": "Validation failed",
  "details": {
    "phone": "Please enter a valid 10-digit Indian phone number"
  }
}
```

---

## 2. Newsletter Subscription API

### `POST /api/newsletter`
Subscribes an email to the exclusive beauty journal and new launch announcements.

#### Request Payload
```json
{
  "email": "ananya.rao@example.com"
}
```

#### Success Response (`200 OK`)
```json
{
  "success": true,
  "message": "Welcome to our inner circle! A 10% welcome privilege code has been simulated for your first order."
}
```

#### Error Response (`400 Bad Request`)
```json
{
  "success": false,
  "error": "Invalid email address format"
}
```

---

## 3. Product Catalogue Service

### `GET /api/products`
Retrieves products with optional filtering and sorting.

#### Query Parameters
- `category` (optional): `All` | `Skincare` | `Makeup` | `Lip Care` | `Face Care` | `Body Care`
- `search` (optional): string query
- `sort` (optional): `featured` | `price-low-high` | `price-high-low` | `rating` | `newest`

#### Success Response (`200 OK`)
```json
{
  "success": true,
  "count": 12,
  "data": [
    {
      "id": "prod-001",
      "name": "Rose Gold Radiance Serum",
      "tagline": "Cellular glow elixir with 24k botanical gold & saffron",
      "price": 2450,
      "originalPrice": 2950,
      "category": "Skincare",
      "rating": 4.9,
      "reviewCount": 128,
      "images": ["/images/products/radiance-serum-1.jpg"],
      "isBestseller": true,
      "isNew": false,
      "inStock": true,
      "description": "...",
      "keyBenefits": ["..."],
      "ingredients": "...",
      "howToUse": "..."
    }
  ]
}
```

---

## 4. Skincare & Beauty Journal Service

### `GET /api/journal`
Retrieves editorial beauty articles and skincare guides.

#### Success Response (`200 OK`)
```json
{
  "success": true,
  "articles": [
    {
      "slug": "monsoon-hydration-guide",
      "title": "Nourishing Your Skin Barrier in Southern Climates",
      "category": "Skincare Routine",
      "readTime": "4 min read",
      "date": "October 2026",
      "author": "Dr. Maya Swaminathan, Consulting Dermatologist",
      "excerpt": "...",
      "content": "..."
    }
  ]
}
```
