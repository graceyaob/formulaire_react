import { useEffect, useState} from "react";

function Formulaire(){
    const [nom, setNom]= useState("")
    const [prenom, setPrenom] = useState("")
    const [email, setEmail] = useState("")
    const [tab, setTab] = useState([])
    const [sauvegarde, setSauvegarde] = useState([])



   
    const valider = ()=>{
        let personne ={
            nom: "",
            prenom: "",
            email: "",
        }
        personne.nom = nom
        personne.prenom = prenom
        personne.email =email

        setTab(prev=>{return [...prev,personne]})
        console.log(personne)

    }

    useEffect(()=>{
        // Récupération des pièces depuis le fichier JSON
        fetch("./sauvegarde.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => setSauvegarde(jsondata));

    },[])
    return(
        <div> 
            <input 
                type="text" 
                placeholder="Veuillez entrer votre Nom" 
                className = "nom" 
                value={nom} onChange={(e) => setNom(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Veuillez entrez votre prenom" 
                className="prenom" value={prenom}onChange={(e) => setPrenom(e.target.value)}/>
            
            <input 
                type="email" 
                placeholder="Veuillez entrez votre email" 
                className="prenom" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={()=>valider()}>Enregistrer</button>
    
        {
            // Affichage des données du fichier json
            sauvegarde?.map((personne,index) => (
                <ul key={index}>personne{index+1}
                    <li>{personne?.nom}</li>
                    <li>{personne?.prenom}</li>
                    <li>{personne?.email}</li>
                </ul>
            ))
        }
        </div>
    )
}

export default Formulaire