# WhatsApp Web-like Application

This project is a WhatsApp Web-like chat application built using React.js, Vite, and real-time messaging with InstantDB. It includes a contact list, a chat window, and offline data storage using IndexedDB.

---

## **Features**

- Contact List: Displays a list of contacts.
- Chat Window: Displays chat history for the selected contact.
- Real-Time Messaging: Uses InstantDB for real-time message storage and retrieval.
- Offline Storage: IndexedDB integration for offline data.
- Responsive Design: Optimized for different screen sizes.

---

## **Setup Instructions**

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/DeepakSingh2003/ChatApplication.git
   cd ChatApplication
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure InstantDB**:
   - Sign up for InstantDB at [InstantDB](https://www.instantdb.com/).
   - Obtain your API keys and update the codebase where necessary to integrate your API.

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   - The application will be accessible at `http://localhost:5173`.

5. **Build for Production** (optional):
   ```bash
   npm run build
   ```
   - This will create a `dist/` folder with production-ready files.

6. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## **Project Structure**

```plaintext
whatsapp-clone/
├── src/
│   ├── components/       # React components
│   ├── context/          # Global state management
│   ├── hooks/            # Custom hooks (e.g., InstantDB, IndexedDB)
│   ├── styles/           # Styling files
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # React entry point
├── public/               # Static assets
├── index.html            # Entry HTML file
├── package.json          # Project metadata and dependencies
```

---

## **Dependencies**

- React.js: UI library
- Vite: Development environment
- idb: IndexedDB wrapper for offline data storage
- react-router-dom: For routing (optional)

---

## **Usage**

1. **Contact List**:
   - Displays all available contacts.
   - Click on a contact to load their chat history.

2. **Chat Window**:
   - View messages and send new ones.
   - Messages are synced with InstantDB for real-time updates.

3. **Offline Storage**:
   - Messages are stored locally using IndexedDB when offline.

---

## **Deployment**

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your preferred hosting platform (e.g., Netlify, Vercel, Firebase).

---

## **Known Issues and Improvements**

- The application may require additional error handling for InstantDB API failures.
- UI/UX enhancements can be made to improve the user experience.
- Add push notifications for new messages.

---


## **License**

This project is open-source and available under the MIT License.

---

## **Contact**

For questions or support, contact [deepaksinghchauhan914@gmail.com].


