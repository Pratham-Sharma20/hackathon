
# Resume Analyzer AI 🤖

### Advanced Resume Parsing
- 📄 PDF text extraction with formatting preservation
- 🗂️ Intelligent section detection (Experience, Education, Skills)
- 📅 Date timeline extraction and career progression analysis
- 🔢 Metrics detection (achievements, KPIs, quantifiable results)

### AI-Powered Analysis
- 🤖 Mistral AI integration for deep insights
- 🎯 Skills gap analysis with market relevance scoring
- 📈 Career trajectory prediction
- 💡 Personalized improvement recommendations
- 🏆 Achievement optimization suggestions

### Actionable Insights
- 📊 Skills categorization matrix (Technical/Business/Soft Skills)
- 📝 ATS optimization checklist
- 🚀 30/60/90 day career action plan
- 🔍 Industry transition analysis
- 📚 Learning resource recommendations

---

## Tech Stack 💻

| Component       | Technologies                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **Backend**     | FastAPI, Mistral AI, PyPDF2, Asyncio, Python 3.10+                          |
| **Frontend**    | React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons                      |
| **Deployment**  | Railway (Backend), Netlify (Frontend), PostgreSQL (Optional)                |
| **Analysis**    | NLP patterns, Regex processing, AI-driven insights generation               |

---



---

## Setup Guide 🛠️

### Prerequisites
- Python 3.9+
- React.js
- Mistral API key
- PDF processing library dependencies (`poppler-utils`)

### Backend Installation

1. Clone repository:
   ```bash
   git clone https://github.com/yourusername/resume-analyzer.git
   cd resume-analyzer/backend
   ```

2. Create virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure environment variables (create `.env` file):
   ```env
   MISTRAL_API_KEY=your_mistral_api_key
   ```

5. Start FastAPI server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```

### Frontend Installation

1. Navigate to frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Production build:
   ```bash
   npm run build
   ```

---

## Deployment 🚀

### Backend (Railway)
1. Connect GitHub repository.
2. Add environment variables.
3. Set build command: `pip install -r requirements.txt`.
4. Set start command: `uvicorn main:app --port $PORT`.
5. Enable HTTPS.

### Frontend (Netlify)
1. Connect Git repository.
2. Set build command: `npm run build`.
3. Set publish directory: `dist`.
4. Add environment variables:
   - `VITE_API_URL`: Your Railway backend URL.

---

## API Endpoints 📡

| Endpoint       | Method | Description                         |
|----------------|--------|-------------------------------------|
| `/analyze`     | POST   | Analyze resume PDF                  |
| `/health`      | GET    | Service health check                |

---

## Usage Example 💡

```python
# Sample analysis flow
analyzer = EnhancedResumeAnalyzer(api_key)
pdf_content = await pdf_loader()
raw_text = analyzer.extract_text_from_pdf(pdf_content)
processed = analyzer.process_resume_content(raw_text)
analysis = await analyzer.get_ai_analysis(processed)
```

---

## Contributing 🤝

1. Fork the repository.
2. Create feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit changes:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open Pull Request.

---

## Troubleshooting 🔧

**Common Issues:**
- PDF parsing errors: Ensure files are text-based PDFs (not scanned).
- AI timeout: Reduce resume length or adjust timeout values.
- Dependency issues: Use exact versions from `requirements.txt`.

---

## License 📄

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

**Note:** Replace placeholder values (`yourusername`, `your_mistral_api_key`) with your actual credentials before deployment.
```
=======
# hackathon
1st hackathon
>>>>>>> 296c3e785d678aff2ee71d04219faf021110e5eb
=======
# hackathon
>>>>>>> 24fe1a5fd1a600e60d121ff311e597155e4e6394
