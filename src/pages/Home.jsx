import { useState } from "react";
import Servant from "../components/Servant";
import Button from "../components/Button";
import { MdClose, MdDelete, MdEdit } from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";


export default function Home() {
  const [servants, setservants] = useState([
    {
      id: 1,
      name: "Kama”",
      image: "https://fategrandorder.fandom.com/wiki/Kama",
      classof :'Assasin',
      stars: 5,
    },
    {
      id: 2,
      name: "Okita Alter",
      image: "/iphone_14_pro.jpg",
      classof :'Alter Ego',
      stars: 5,
    },
    {
      id: 3,
      name: "Chen Gong",
      image: "/iphone_14.jpg",
      classof :'Caster',
      stars: 2,
    },
    {
      id: 4,
      name: "Mash",
      image: "/apple_vision_pro.jpg",
      classof :'Shielder',
      stars: 2,
    },
    {
      id: 5,
      name: "Ushiwakamaru",
      image: "apple_watch_series_8.jpg",
      classof :'Rider',
      stars: 3,
    },
    {
      id: 6,
      name: "Oda Nobunaga",
      image: "/ipad_pro.jpg",
      classof :'Archer',
      stars: 4,
    },
    {
      id: 7,
      name: "Jason”",
      image: "/macbook_air_15.jpg",
      classof :'Saber',
      stars: 1,
    },
    {
      id: 8,
      name: "Heracles",
      image: "/iphone_14_pro.jpg",
      classof :'Berserker',
      stars: 4,
    },
    {
      id: 9,
      name: "Scathach",
      image: "/iphone_14.jpg",
      classof :'Lancer',
      stars: 5,
    },
    {
      id: 10,
      name: "Jeane D\'arc",
      image: "/apple_vision_pro.jpg",
      classof :'Ruler',
      stars: 5,
    },
    {
      id: 11,
      name: "Angra Mainyu",
      image: "apple_watch_series_8.jpg",
      classof :'Avenger',
      stars: 0,
    },
    {
      id: 12,
      name: "Oberon",
      image: "/ipad_pro.jpg",
      classof :'Pretender',
      stars: 5,
    },
  ]);
  const [keyword, setKeyword] = useState("");
  const [minstars, setMinstars] = useState(0);
  const [maxstars, setMaxstars] = useState(Infinity);
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterBy,setFilterBy] = useState("-");
  const [page, setPage] = useState(1);
  const [editedservant, setEditedservant] = useState();
  const [addServant,setAddServant] = useState(false);
  const [buffer,setBuffer] = useState({id:'',name:'',img:'',classof:'',stars:''});
  const [classServants,setClassServant] =useState(['-','Saber',
  'Archer','Lancer','Rider','Assasin','Rider','Berserker','Ruler','Shilder','Alter Ego','Pretender']); 
  const filteredSortedservants = servants
    .toSorted((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    })
    .filter(
      (servant) =>
        servant.name.toLowerCase().includes(keyword) &&
        servant.stars >= minstars &&
        servant.stars <= maxstars
    );

    function handleChange(e){
      setBuffer({
        ...buffer,
        [e.target.name]: e.target.value
      })
    }
  return (
    <div className="servants">
      <header>
        <button style={{color:'white',backgroundColor:'lime',borderRadius:'10%',width:'100px',height:'30px'}} onClick={()=>{
            setAddServant(true);
        }}>Create</button>
        <label>
          Cari:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
        <section>
          Harga:
          <label>
            Minimal:
            <input
              type="number"
              value={minstars}
              onChange={(e) => setMinstars(e.target.value)}
            />
          </label>
          <label>
            Maksimal:
            <input
              type="number"
              value={maxstars}
              onChange={(e) => setMaxstars(e.target.value || Infinity)}
            />
          </label>
        </section>
        <section>
          Class Of
          <select value={filterBy} onChange={(e)=>{
              servants.map((value)=>{
                  if(value.classof===e.target.value){
                    return value;
                  }else if(e.target.value=='-'){
                    return value;
                  }
              })
          }}>
           {
              classServants.map((value,i)=>{
                return <>
                <option key={i} value={value}>{value}</option>
                </>
              })
           }
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Naik</option>
            <option value="desc">Turun</option>
          </select>
        </section>
        <section>
          Urutkan:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="id">-</option>
            <option value="name">Name</option>
            <option value="stars">Stars</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Naik</option>
            <option value="desc">Turun</option>
          </select>
        </section>
      </header>
      <main>
        {filteredSortedservants.length > 0
          ? filteredSortedservants
              .filter((_servant, i) => i >= 4 * page - 4 && i < 4 * page)
              .map((servant) => (
                <Servant
                  key={servant.id}
                  {...servant}
                  setEditedservant={setEditedservant}
                />
              ))
          : "Tidak ada servant ditemukan."}
        {
          addServant&&(
           <>
           <div className="card dialog">
          <button onClick={() => setAddServant(false)}>
            <MdClose />
          </button>
          <h1>ADD</h1>
          <label>
            ID
            <input type="number" value={buffer.id} name='id' onChange={handleChange}/>
          </label>
          <label>
            Name
            <input type="text" value={buffer.name} name='name' onChange={handleChange}/>
          </label>
          <label>
            Image Link
            <input type="text" value={buffer.img} name='img' onChange={handleChange}/>
          </label>
          <label>
            Classof
            <select name='classof' onChange={
              handleChange
            }>
              {
                classServants.map((value,i)=>{
                  return <option key={i} value={value} onChange={
                    console.log(value)
                  }>{value}</option>
                })
              }
          </select>
          </label>
          <label>
            Stars
            <input type="number" value={buffer.stars} name='stars' onChange={handleChange}/>
          </label>
         
          <button onClick={()=>{
              setservants([...servants,buffer]);
              setBuffer('')
          }}>Save</button>
        </div>
           </>
          )
        }
      </main>
      <footer>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Sebelumnya
        </Button>
        {filteredSortedservants
          .filter((_servant, i) => i % 4 === 0)
          .map((_servant, i) => (
            <button
              key={i}
              className="page-number"
              onClick={() => setPage(i + 1)}
              disabled={i + 1 === page}
            >
              {i + 1}
            </button>
          ))}
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === Math.ceil(filteredSortedservants.length / 4)}
        >
          Berikutnya
        </Button>
      </footer>
      {editedservant && (
        <form
          className="dialog"
          onSubmit={(e) => {
            e.preventDefault();
            setservants(
              servants.map((servant) =>
                servant.id === editedservant.id ? editedservant : servant
              )
            );
            setEditedservant(undefined);
          }}
        >
          <h1>Edit Produk</h1>
          <label>
            Nama
            <input
              type="text"
              value={editedservant.name}
              onChange={(e) =>
                setEditedservant({ ...editedservant, name: e.target.value })
              }
              autoFocus
            />
          </label>
          <label>
            Harga
            <input
              type="number"
              value={editedservant.stars}
              onChange={(e) =>
                setEditedservant({
                  ...editedservant,
                  stars: parseInt(e.target.value),
                })
              }
            />
          </label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              type="reset"
              variant="tonal"
              onClick={() => setEditedservant(undefined)}
            >
              Batal
            </Button>
            <Button>Simpan</Button>
          </div>
        </form>
      )}
    </div>
  );
}
