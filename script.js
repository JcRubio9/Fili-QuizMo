import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// FIREBASE CONFIGURATION (Replace with your actual keys)
const firebaseConfig = {
    apiKey: "AIzaSyABVywx4CfeObPzrLE13QxQF6XCfh-t-Rw",
  authDomain: "fili-quizmo.firebaseapp.com",
  projectId: "fili-quizmo",
  storageBucket: "fili-quizmo.firebasestorage.app",
  messagingSenderId: "302906286199",
  appId: "1:302906286199:web:5d74dd9af4868922dd6672",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// NAVIGATION
window.showSection = (id) => {
    document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.goHome = () => showSection('home');

window.scrollToSection = (id) => {
    showSection('home');
    setTimeout(() => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }, 100);
};

// LOGIN LOGIC (Diretso Pasok)
window.handleLogin = async (role) => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    if (!email || !pass) return alert("Pakilagay ang email at password.");

    try {
        await signInWithEmailAndPassword(auth, email, pass);
        // "Diretsyong pasok" logic base sa role
        showSection(role); 
    } catch (error) {
        alert("Login Error: " + error.message);
    }
};

// SIGNUP & VERIFICATION
window.emailVerification = async () => {
    const email = document.getElementById('regEmail').value;
    const pass = document.getElementById('regPass').value;
    try {
        const userCred = await createUserWithEmailAndPassword(auth, email, pass);
        await sendEmailVerification(userCred.user);
        alert("Verification link sent! Check your email.");
    } catch (e) { alert(e.message); }
};

window.emailVerified = () => {
    const btn = document.getElementById('verifiedStatusBtn');
    btn.innerText = "Status: Verified ✅";
    btn.style.background = "#2e7d32";
};

window.logout = () => {
    signOut(auth).then(() => {
        alert("Logged out successfully.");
        goHome();
    });
};

window.downloadApp = () => alert("Downloading Fili-QuizMo App...");