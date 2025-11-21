import React, { useState } from 'react';
import { CheckCircle, ArrowLeft, Clock, Send, Database, Layout, ShieldAlert, Users, Check } from 'lucide-react';
import { Logo } from './components/Logo';
import { DashboardPreview } from './components/DashboardPreview';

function App() {
  const currentYear = new Date().getFullYear();
  const [formState, setFormState] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.phone) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Logo />
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-colors bg-teal-600 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 cursor-pointer"
          >
            תיאום הדגמה
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-slate-50">
          <div className="absolute top-0 right-0 -z-10 opacity-30">
             <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
                <circle cx="400" cy="100" r="300" fill="url(#paint0_radial)" />
                <defs>
                  <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 100) rotate(90) scale(300)">
                    <stop stopColor="#0d9488" />
                    <stop offset="1" stopColor="#0d9488" stopOpacity="0" />
                  </radialGradient>
                </defs>
             </svg>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content - Right Side (RTL) */}
              <div className="text-right space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100">
                  <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-xs font-semibold text-teal-700 tracking-wide">חדש: מודול סנכרון אוטומטי לשכר</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                  לחסוך כסף <br/>
                  <span className="text-teal-600 relative">
                    בלי למכור זמן
                    <svg className="absolute w-full h-3 -bottom-1 right-0 text-green-300 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 max-w-lg leading-relaxed">
                  מערכת שעוזרת לרשויות מקומיות לאסוף אישורים ולסגור חוסרי נוכחות בצורה אוטומטית וחכמה.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all bg-teal-600 rounded-full hover:bg-teal-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 cursor-pointer"
                  >
                    אני מעוניין לשמוע פרטים
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-700 transition-all bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200 cursor-pointer"
                  >
                    איך זה עובד?
                  </button>
                </div>

                <div className="flex items-center gap-6 text-sm text-slate-500 pt-4">
                    <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>הטמעה מהירה</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>תמיכה מלאה בעברית</span>
                    </div>
                </div>
              </div>

              {/* Visual - Left Side */}
              <div className="relative lg:mr-auto w-full max-w-2xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-green-400 rounded-2xl blur opacity-20"></div>
                  <div className="relative">
                      <DashboardPreview />
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow hidden md:flex">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                          <Clock size={20} />
                      </div>
                      <div>
                          <p className="text-xs text-slate-500">זמן שנחסך השבוע</p>
                          <p className="text-lg font-bold text-slate-800">14 שעות</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-block p-3 bg-red-50 rounded-full text-red-500 mb-6">
                <ShieldAlert size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">האתגרים בניהול נוכחות</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              רשויות מבזבזות שעות על רדיפה אחרי עובדים, טלפונים, ווצאפים ואישורים שלא מגיעים בזמן. 
              בסוף זה יוצר פערים בתלושים, טעויות, וכסף שנשפך לחינם.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">איך זה עובד</h2>
               <p className="text-slate-500">תהליך אוטומטי מלא מהזיהוי ועד לתלוש השכר</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 -z-10 w-3/4 mx-auto"></div>

                {[
                    { icon: <Clock />, title: "מזינים את שעות העבודה", desc: "המערכת מתממשקת לשעון הנוכחות" },
                    { icon: <ShieldAlert />, title: "המערכת מזהה חוסרי נוכחות", desc: "ניתוח אוטומטי של הנתונים בזמן אמת" },
                    { icon: <Send />, title: "העובד מקבל ווצאפ", desc: "בוט חכם שולח בקשה לאישור חריגה" },
                    { icon: <Database />, title: "הכל נאסף ומסודר", desc: "האישורים נקלטים ישירות למערכת" },
                ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group">
                        <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 border border-slate-100 group-hover:border-teal-200 group-hover:shadow-teal-100 transition-all duration-300 relative z-10">
                            <div className="text-teal-600 transform group-hover:scale-110 transition-transform duration-300">
                                {React.cloneElement(step.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
                            </div>
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold border-4 border-slate-50">
                                {idx + 1}
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-sm text-slate-500 max-w-[200px]">{step.desc}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* Features / Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
                
                {/* Right Column: Why Choose Us */}
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">למה לבחור במערכת שלנו</h2>
                    <div className="space-y-4">
                        {[
                            "פחות טעויות בתלושים",
                            "חוסכים שעות של עבודה ידנית",
                            "מתלבשת על המערכת הקיימת",
                            "הכל במקום אחד",
                            "בקרה מלאה בזמן אמת"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-teal-50 hover:border-teal-100 transition-colors">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 ml-4">
                                    <CheckCircle size={14} className="text-green-600" />
                                </div>
                                <span className="text-lg font-medium text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left Column: What it does */}
                <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                    
                    <h3 className="text-2xl font-bold mb-8 relative z-10">מה המערכת יודעת לעשות?</h3>
                    <ul className="space-y-6 relative z-10">
                        {[
                            "שליחת ווצאפ לעובדים שלא סימנו נוכחות",
                            "איסוף אישורי מחלה/חופשה/משימות",
                            "סנכרון מלא למערכת השכר",
                            "לוח בקרה חכם למנהלים",
                            "מתחבר למערכת הקיימת ברשות"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="mt-1 p-1 bg-white/10 rounded text-teal-300">
                                    <Layout size={16} />
                                </div>
                                <span className="text-slate-300 text-lg">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="mt-10 pt-8 border-t border-white/10">
                         <div className="flex items-center gap-4">
                            <div className="flex -space-x-3 space-x-reverse">
                                {[1,2,3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs">
                                        <Users size={16} />
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm text-slate-400">כבר בשימוש ב-15 רשויות</span>
                         </div>
                    </div>
                </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
             {/* Decorative Blob */}
             <div className="absolute -left-20 top-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
             <div className="absolute -right-20 bottom-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

             <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                    
                    <div className="p-10 md:w-1/2 bg-teal-600 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">השאירו פרטים ונחזור אליכם</h2>
                            <p className="text-teal-100 mb-8">הצוות שלנו ישמח להדגים לכם איך המערכת עובדת ולהתאים אותה לצרכים שלכם.</p>
                        </div>
                    </div>

                    <div className="p-10 md:w-1/2 bg-white">
                        {isSubmitted ? (
                          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[300px] animate-in fade-in zoom-in duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                              <Check className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">הפרטים התקבלו בהצלחה!</h3>
                            <p className="text-slate-500">תודה {formState.name}, נציג שלנו יחזור אליך בהקדם לתיאום הדגמה.</p>
                            <button 
                              onClick={() => { setIsSubmitted(false); setFormState({name:'', email:'', phone:''}) }}
                              className="mt-4 text-teal-600 font-medium hover:text-teal-700 underline underline-offset-4"
                            >
                              שלח פנייה נוספת
                            </button>
                          </div>
                        ) : (
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">שם מלא</label>
                                <input 
                                  required
                                  type="text" 
                                  id="name" 
                                  value={formState.name}
                                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50" 
                                  placeholder="ישראל ישראלי" 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">מייל</label>
                                <input 
                                  required
                                  type="email" 
                                  id="email" 
                                  value={formState.email}
                                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50" 
                                  placeholder="you@example.com" 
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">מספר טלפון</label>
                                <input 
                                  required
                                  type="tel" 
                                  id="phone" 
                                  value={formState.phone}
                                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50" 
                                  placeholder="050-0000000" 
                                />
                            </div>
                            <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all shadow-lg transform active:scale-95 mt-4">
                                אני מעוניין לשמוע פרטים
                            </button>
                        </form>
                        )}
                    </div>
                </div>
             </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                <Logo />
                <div className="flex gap-6 text-slate-500 text-sm">
                    <a href="#" className="hover:text-teal-600 transition-colors">תנאי שימוש</a>
                    <a href="#" className="hover:text-teal-600 transition-colors">מדיניות פרטיות</a>
                    <a href="#" className="hover:text-teal-600 transition-colors">צור קשר</a>
                </div>
            </div>
            <div className="text-center border-t border-slate-50 pt-8">
                <p className="text-slate-400 text-xs">© {currentYear} מוניטק - כל הזכויות שמורות.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;