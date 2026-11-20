# K5 Day 12: Instructor Slides (React)

Deck giảng viên **AI SDLC — Đảo Đèn Lồng**, cùng khung giao diện với deck Day 02, Day 03 và Day 10 (Vite + React + TypeScript, timer theo checkpoint, hiệu ứng âm thanh Web Audio, ghi chú giảng viên, tự động đổi ca sáng/chiều).

Nội dung xây dựng dựa trên tài liệu bài lab `VinUni-AI20k/K5-L3-LAB-Day12-AI-SDLC` (`README.md`, `CHECKPOINTS.md`, `GUIDE.md`, `RULES.md`, `RUBRIC.md`, `SUBMISSION.md`) và Lab Board Claude Artifact [Đảo Đèn Lồng Lab](https://claude.ai/artifact/Q1RYyv1dxjUczzCbd2ZnoW).

---

## 🚀 Live Demo

- GitHub Pages: `https://blgihuy.github.io/k5-day12-instructor-slides/`
- Thêm tham số URL `?ca=sang` hoặc `?ca=chieu` để chuyển đổi ca thủ công.

---

## 🛠️ Cài đặt & Chạy Local

### 1. Cài đặt thư viện:
```bash
cd app
npm install
```

### 2. Chạy môi trường Dev:
```bash
npm run dev
```

### 3. Build sản phẩm (cho GitHub Pages subpath `/k5-day12-instructor-slides/`):
```bash
npm run build
# Thư mục xuất ra: app/dist
```

---

## ✏️ Chỉnh sửa nội dung Slide

Toàn bộ nội dung slide và speaker notes nằm trong file `content/build_content.py`.

Sau khi sửa file Python, chạy lệnh để sinh lại file `app/src/slides/content.json`:

```bash
python content/build_content.py
# hoặc trên Windows với Python MSYS2:
# py content/build_content.py
```

---

## 🕒 Lớp Sáng và Lớp Chiều

Bài lab diễn ra trong **4 giờ (240 phút)**. Deck quy chuẩn theo giờ lớp chiều và tự động chuyển đổi theo giờ hệ thống khi mở trang:

- **Lớp Sáng**: 08:30 đến 12:30 (Mở trước 13:00). Hạn nộp LMS: **23h59 cùng ngày làm lab**.
- **Lớp Chiều**: 13:30 đến 17:30 (Mở từ 13:00). Hạn nộp LMS: **11h59 trưa ngày hôm sau**.

Tất cả các mốc giờ trên slide, hạn nộp và ghi chú giảng viên tự động tịnh tiến chính xác theo ca đang chọn. Có thể bấm nút chọn ca ở thanh điều khiển trên cùng để đổi nhanh.

---

## ⌨️ Phím tắt điều khiển

| Phím | Chức năng |
|---|---|
| <kbd>←</kbd> <kbd>→</kbd> / <kbd>Space</kbd> / <kbd>PageUp</kbd> <kbd>PageDown</kbd> | Chuyển slide Trước / Tiếp |
| <kbd>Home</kbd> / <kbd>End</kbd> | Về slide đầu tiên / slide cuối cùng |
| <kbd>P</kbd> | Bật / Tạm dừng đồng hồ đếm ngược (Timer) |
| <kbd>R</kbd> | Đặt lại đồng hồ về thời lượng ban đầu của Checkpoint |
| <kbd>N</kbd> | Bật / Tắt bảng Ghi chú giảng viên (Speaker Notes) |
| <kbd>M</kbd> | Bật / Tắt hiệu ứng âm thanh (SFX) |
| <kbd>B</kbd> | Bật / Tắt nhạc nền thư giãn (Ambient Music) |
| <kbd>F</kbd> | Bật / Thoát chế độ toàn màn hình (Fullscreen) |

---

## 📦 Đẩy lên GitHub cá nhân & Deploy GitHub Pages

1. Khởi tạo Git và push lên GitHub cá nhân của bạn:
   ```bash
   git init
   git add .
   git commit -m "feat: K5 Day 12 Instructor Slides"
   git branch -M main
   git remote add origin https://github.com/blgihuy/k5-day12-instructor-slides.git
   git push -u origin main
   ```

2. File workflow tự động deploy `.github/workflows/deploy.yml` đã được cấu hình sẵn. Khi push lên nhánh `main`, GitHub Actions sẽ tự động build và xuất bản lên GitHub Pages tại:
   `https://blgihuy.github.io/k5-day12-instructor-slides/`
