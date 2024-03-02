import { useState } from "react";

export default function Form({onAddItem}) {
    const [name, setName] = useState('');
    const [quantity, setQuanity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        // alert(name);
        // alert(quantity);
        if(!name) {
        alert('masukkan nama belanjaanmu!');
        return;
        }

        const newItem = {
        // name: name,
        // quantity: quantity
        name, quantity, checked: false, id: Date.now()
        };
        // console.log(newItem);
        onAddItem(newItem);
        setName('');
        setQuanity(1);
    }

    const quantityNum = [...Array(20)].map((_, i) => (
        <option value={ i + 1 } key={ i + 1 }>{ i + 1}</option>
    ));
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Hari ini belanja apa kita?</h3>
            <div>
            <select value={quantity} onChange={(e) => setQuanity(Number(e.target.value))}>{quantityNum}</select>
            <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)}/> {/*e.target adalah event yg bersangkutan*/}
            </div>
            <button>Tambah</button>
        </form>
    );
}