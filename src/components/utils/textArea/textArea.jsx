import React, { useRef, useEffect } from 'react';
import './styles/desktop.css';

const AutoResizeTextarea = ({query,setQuery}) => {
    const textareaRef = useRef(null);

    useEffect(() => {
        const adjustHeight = () => {
            if (textareaRef.current) {
                textareaRef.current.style.height = 'inherit';
                const scrollHeight = textareaRef.current.scrollHeight;
                const height = Math.min(scrollHeight, 250)
                textareaRef.current.style.height = `${height}px`;
            }
        };

        // Escucha los cambios en el contenido del textarea para ajustar su altura
        const textarea = textareaRef.current;
        textarea.addEventListener('input', adjustHeight);

        // Ajusta la altura inicialmente
        adjustHeight();

        // Limpieza al desmontar el componente
        return () => {
            textarea.removeEventListener('input', adjustHeight);
        };
    }, []);

    return (
        <textarea
            className='inputTextArea'
            placeholder='send message'
            ref={textareaRef} // Asigna la referencia al elemento textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)

            }
        ></textarea>
    );
};

export default AutoResizeTextarea;
