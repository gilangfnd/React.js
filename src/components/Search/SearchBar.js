
import { useState } from 'react';
import './SearchBar.css';
import { useDispatch } from 'react-redux';
import  { searchCars } from '../../features/searchCars/searchCarSlice'

function SearchBar() {
    const [tipeDriver,setTipeDriver] = useState();
    const [tanggal,setTanggal] = useState();
    const [waktuJemput,setWaktuJemput] = useState();
    const [jumlahPenumpang,setJumlahPenumpang] = useState();
    const dispatch = useDispatch();


    const SearchBar = (e) => {
        e.preventDefault();
        dispatch(searchCars({tipeDriver,tanggal,waktuJemput,jumlahPenumpang}))
    }

  return (
    <>
        <form onSubmit={SearchBar}>
            <div id="search" className="container border bg-primary rounded p-3 mt-2 col-9"> 
                <div className="row gx-3 gy-2 mx-2 align-items-center">
                <div className="col-sm-2 m-2">
                    <label>Tipe Driver</label>
                    <select className="form-select" id="specificSizeSelect" value={tipeDriver} onChange={(e)=>{ setTipeDriver(e.target.value) }}>
                        <option hidden >Pilih Tipe Driver</option>
                        <option>Dengan Supir</option>
                        <option>Tanpa Supir (Lepas Kunci)</option>
                    </select>
                </div>
                <div className="col-sm-2 m-2">
                    <label>Tanggal</label>
                    <input type="date" value={tanggal} onChange={(e)=>{ setTanggal(e.target.value) }} className="form-control" id="inputTanggal"/>
                </div>
                <div className="col-sm-2 m-2">
                    <label>Waktu Jemput/Ambil</label>
                    <input type="time" value={waktuJemput} onChange={(e)=>{ setWaktuJemput(e.target.value) }}  className="form-control" id="inputWaktu"/>
                </div>
                <div className="col-sm-3 m-2">
                    <label>Jumlah Penumpang (Optional)</label>
                    <div className="input-group">
                    <input type="text" value={jumlahPenumpang} onChange={(e)=>{ setJumlahPenumpang(e.target.value) }}  className="form-control" id="inputPenumpang" placeholder="Jumlah Penumpang"/>
                    <div className="input-group-text">
                    </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div>
                    <button id="load-btn" className="button">Cari Mobil</button>
                    </div>
                </div>
                </div>
             </div>
        </form>
  </>
  );
}

export default SearchBar;
