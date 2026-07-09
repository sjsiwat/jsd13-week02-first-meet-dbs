# 🍔 First Meet Databases (JSD13 Week 02)

A hands-on learning project comparing **MongoDB (NoSQL)** and **PostgreSQL (Relational)** by modeling the same restaurant domains in both systems.

---

## 📁 Project Structure

| Folder | Description |
|---|---|
| `01_Mongodb/` | MongoDB scripts for **Chrome Burger** — a burger restaurant database using document-based modeling |
| `02_postgresql/` | PostgreSQL scripts for the same **Chrome Burger** domain, modeled relationally with normalized tables |
| `03_my_ecommerce_project/` | **BrewMap AI / Johny Coffee** — a self-directed e-commerce project for an AI-powered coffee shop discovery platform |

---

## 🍔 Chrome Burger Domain (01 & 02)

The same burger restaurant modeled in two database paradigms:

### MongoDB (`01_Mongodb/chrome-burger-db/`)
- Collections: `suppliers`, `staff`, `ingredients`, `menu_items`, `orders`
- Embedded documents for recipes and order items
- `$lookup` aggregation for joins

### PostgreSQL (`02_postgresql/`)
- 7 normalized tables with foreign key constraints
- Junction tables: `recipe_items`, `order_items`
- Standard SQL joins

### Data Comparison

| Aspect | MongoDB | PostgreSQL |
|---|---|---|
| Suppliers | 3 | 3 |
| Ingredients | 3 | 10 |
| Menu Items | 2 | 8 |
| Orders | 2 | 19 |

---

## ☕ BrewMap AI / Johny Coffee (03)

An AI-powered coffee shop discovery platform concept. Includes:
- Project proposal & business model canvas
- Use case & ER diagrams (Excalidraw)
- MongoDB schema samples (JSON)
- MongoDB seed scripts (`johnycoffee-db/`)

---

## 🎯 Learning Objectives

- Compare document-based (MongoDB) vs relational (PostgreSQL) modeling
- Write equivalent queries across both systems
- Understand trade-offs in schema design, data integrity, and query patterns
- Design a real-world e-commerce database

---

---

# 🍔 พบกับฐานข้อมูลครั้งแรก (JSD13 สัปดาห์ 02)

โปรเจกต์เรียนรู้เชิงปฏิบัติที่เปรียบเทียบ **MongoDB (NoSQL)** และ **PostgreSQL (Relational)** โดยการจำลองโดเมนร้านอาหารเดียวกันในทั้งสองระบบ

---

## 📁 โครงสร้างโปรเจกต์

| โฟลเดอร์ | คำอธิบาย |
|---|---|
| `01_Mongodb/` | สคริปต์ MongoDB สำหรับ **Chrome Burger** — ฐานข้อมูลร้านเบอร์เกอร์แบบเอกสาร |
| `02_postgresql/` | สคริปต์ PostgreSQL สำหรับโดเมน **Chrome Burger** เดียวกัน แบบตารางสัมพันธ์ |
| `03_my_ecommerce_project/` | **BrewMap AI / Johny Coffee** — โปรเจกต์อีคอมเมิร์ซส่วนตัวสำหรับแพลตฟอร์มค้นหาร้านกาแฟด้วย AI |

---

## 🍔 โดเมน Chrome Burger (01 & 02)

ร้านเบอร์เกอร์เดียวกันที่ถูกจำลองในฐานข้อมูลสองรูปแบบ:

### MongoDB (`01_Mongodb/chrome-burger-db/`)
- คอลเล็กชัน: `suppliers`, `staff`, `ingredients`, `menu_items`, `orders`
- ฝังเอกสารสำหรับสูตรอาหารและรายการในออเดอร์
- ใช้ `$lookup` aggregation สำหรับการ join

### PostgreSQL (`02_postgresql/`)
- 7 ตารางที่ normalized พร้อม foreign key constraints
- ตารางเชื่อม: `recipe_items`, `order_items`
- การ join ด้วย SQL มาตรฐาน

### เปรียบเทียบข้อมูล

| หัวข้อ | MongoDB | PostgreSQL |
|---|---|---|
| ซัพพลายเออร์ | 3 | 3 |
| วัตถุดิบ | 3 | 10 |
| รายการเมนู | 2 | 8 |
| ออเดอร์ | 2 | 19 |

---

## ☕ BrewMap AI / Johny Coffee (03)

แนวคิดแพลตฟอร์มค้นหาร้านกาแฟด้วย AI ประกอบด้วย:
- ข้อเสนอโปรเจกต์และ Business Model Canvas
- Use Case และ ER Diagram (Excalidraw)
- ตัวอย่าง Schema MongoDB (JSON)
- สคริปต์เริ่มต้น MongoDB (`johnycoffee-db/`)

---

## 🎯 วัตถุประสงค์การเรียนรู้

- เปรียบเทียบการออกแบบฐานข้อมูลแบบเอกสาร (MongoDB) และแบบสัมพันธ์ (PostgreSQL)
- เขียนคำสั่งค้นหาที่เทียบเท่ากันในทั้งสองระบบ
- เข้าใจข้อดี-ข้อเสียของการออกแบบ schema, ความถูกต้องของข้อมูล, และรูปแบบการค้นหา
- ออกแบบฐานข้อมูลอีคอมเมิร์ซสำหรับโลกจริง
