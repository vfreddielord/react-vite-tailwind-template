import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
    
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem('notes');
        return saved ? JSON.parse(saved) : [];
    });

    const [noteText, setNoteText] = useState('');
    const [editId, setEditId] = useState(null);
    const inputRef = useRef(null);

   
    const USER_NAME = "FREDDIE_THE_GREAT"; 
    const USER_STATUS = "AUTHORIZED_ADMIN";

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = () => {
        if (!noteText.trim()) return;
        setNotes([{ id: Date.now(), text: noteText }, ...notes]);
        setNoteText('');
        inputRef.current.focus();
    };

    const updateNote = () => {
        setNotes(notes.map((n) => n.id === editId ? { ...n, text: noteText } : n));
        setEditId(null);
        setNoteText('');
        inputRef.current.focus();
    };

    const deleteNote = (id) => setNotes(notes.filter((n) => n.id !== id));

    return (
        <div className="min-h-screen bg-[#121212] flex justify-center items-start pt-24 p-6 font-sans antialiased text-white relative">
            
      
            <div className="fixed top-8 left-8 flex items-center gap-4 select-none">
               
                <div className="w-14 h-14 bg-[#FA8112] rounded-2xl border-2 border-white/20 flex items-center justify-center shadow-[6px_6px_0px_rgba(250,129,18,0.2)] transform -rotate-3">
                    <span className="text-black font-black text-2xl italic">{USER_NAME.charAt(0)}</span>
                </div>
                
             
                <div className="flex flex-col">
                    <h4 className="text-sm font-black tracking-[0.2em] uppercase text-white leading-tight">
                        {USER_NAME}
                    </h4>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <p className="text-[9px] text-white/40 font-black uppercase tracking-widest">
                            {USER_STATUS}
                        </p>
                    </div>
                </div>
            </div>

          
            <div className="bg-black w-full max-w-2xl p-8 rounded-[2rem] shadow-[20px_20px_0px_rgba(250,129,18,0.1)] border-4 border-[#FA8112] relative mt-10">
                
                <header className="mb-10 flex justify-between items-center">
                    <div>
                        <h1 className="text-5xl font-black italic tracking-tighter uppercase text-white leading-none">
                            Notes <span className="text-[#FA8112]">CRUD</span>
                        </h1>
                        <p className="text-white/40 text-[10px] font-black tracking-[0.3em] uppercase mt-2">Wireframe-friendly</p>
                    </div>
                    <div className="bg-[#FA8112] text-black px-4 py-2 rounded-lg font-black text-xl -rotate-3 shadow-[4px_4px_0px_white]">
                        {notes.length}
                    </div>
                </header>

             
                <section className="mb-12">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Enter a note..."
                            className="flex-1 bg-[#1a1a1a] border-2 border-white/10 rounded-xl px-6 py-4 text-lg font-bold text-white outline-none focus:border-[#FA8112] focus:ring-4 focus:ring-[#FA8112]/20 transition-all placeholder:text-white/10"
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && (editId ? updateNote() : addNote())}
                        />
                        <button 
                            onClick={editId ? updateNote : addNote}
                            className="bg-[#FA8112] text-black px-10 py-4 rounded-xl font-black uppercase tracking-tighter hover:bg-white transition-colors active:scale-95 shadow-[6px_6px_0px_rgba(255,255,255,0.2)]"
                        >
                            {editId ? 'UPDATE' : 'Add notes'}
                        </button>
                    </div>
                </section>

                
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-xs tracking-[0.4em] font-black text-white/20 uppercase whitespace-nowrap">Local Archive</h3>
                        <div className="h-[2px] w-full bg-white/5"></div>
                    </div>

                    {notes.length === 0 ? (
                        <div className="py-16 text-center border-2 border-dashed border-white/10 rounded-3xl">
                            <p className="text-white/10 text-sm font-black uppercase tracking-widest italic">No notes..</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {notes.map((note) => (
                                <div 
                                    key={note.id} 
                                    className="group flex justify-between items-center bg-[#0a0a0a] border-l-8 border-[#FA8112] p-6 rounded-r-2xl hover:bg-[#151515] transition-all"
                                >
                                    <span className="text-white text-lg font-bold tracking-tight">{note.text}</span>
                                    <div className="flex gap-6">
                                        <button
                                            className="text-[10px] font-black uppercase text-white/20 hover:text-[#FA8112] tracking-widest transition-colors"
                                            onClick={() => { setEditId(note.id); setNoteText(note.text); inputRef.current.focus(); }}
                                        >
                                            [Edit]
                                        </button>
                                        <button
                                            className="text-[10px] font-black uppercase text-white/20 hover:text-red-500 tracking-widest transition-colors"
                                            onClick={() => deleteNote(note.id)}
                                        >
                                            [Delete]
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default App;