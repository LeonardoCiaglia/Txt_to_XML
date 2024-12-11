
```markdown
# Guida alla Conversione di Testo in XML

Questa applicazione web aiuta a convertire un file di testo strutturato in formato XML. 

---

## **Come Funziona**

1. **Scrittura del Testo**  
   Segui le istruzioni nella guida per scrivere il file di testo in una struttura semplice, separando i dati con i caratteri `:` e `,`, e utilizzando `;` per elenchi multipli.  
   **Esempio:**
   ```plaintext
   name: John
   age: 30
   indirizzi: Via Roma, 123, Milano; Via Milano, 456, Roma
   hobby: Programming
   ```

2. **Inserimento nel Modulo**  
   Incolla il tuo testo nell'area di testo fornita sulla pagina.

3. **Conversione in XML**  
   Clicca sul pulsante **Converti in XML**. Il tuo file verrà convertito in XML e mostrato nel formato corretto.

   **Output Esempio:**
   ```xml
   <root>
       <name>John</name>
       <age>30</age>
       <indirizzi>
           <indirizzo>Via Roma, 123, Milano</indirizzo>
           <indirizzo>Via Milano, 456, Roma</indirizzo>
       </indirizzi>
       <hobby>Programming</hobby>
   </root>
   ```

---

## **Come Avviare il Progetto**

1. **Clona il Repository**
   ```bash
   git clone https://github.com/tuo-repository/text-to-xml-guide.git
   ```
2. **Struttura delle Cartelle**
   Organizza i file come segue:
   ```
   /progetto/
   ├── index.html
   ├── images/
   │   ├── home.png
   │   └── ico.png
   ```

3. **Avviare l'Applicazione**
   Apri `index.html` nel tuo browser preferito.

---

## **Personalizzazioni**

- **Modifica il Design:** Aggiorna lo stile CSS nel tag `<style>` in `index.html`.
- **Aggiungi Funzionalità:** Puoi estendere il progetto con JavaScript per rendere la conversione automatica.

---

## **Crediti**
- **Autore:** Leonardo Ciaglia

🚀 Buona conversione!
```