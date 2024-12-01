//function update data on UI
function updateUi(name,img,bio){
    //get element 
    const name_element=document.getElementById("pokemon_name");
    const img_element = document.querySelector("#pokemon_img");
    const bio_element=document.getElementById("pokemon_bio");
    //update data
    name_element.textContent=name;
    img_element.src=img;
    bio_element.innerText=bio;
}
updateUi("abc","","bio abc")

// function search
function search_pokemon(pokemon_name){
  //set rool url
   const rool_url ="https://pokeapi.co/api/v2/pokemon/";
  //call api
  const promise = fetch(rool_url+pokemon_name.toLowerCase(),{
  method:"Get",
  });


 promise.then(function(json){
    // chuyen kieu json -> js
    return json.json();
 })
 .then(function(pokemonData){
    //lay du lieu theo loai
    const name = pokemonData.name;
    const image = pokemonData.sprites.other["official-artwork"].front_default;
    const bio = `Weight: ${pokemonData.weight}`;
  updateUi(name,image,bio);
 })
 .catch(function(error ){
    alert ("khong tim thay nhan vat nay");
 });
}

// bat su kien cho button search
document
  .getElementById("search_btn")
  .addEventListener("click",function(event){
     //khong cho wedsite load theo mac dinh
     event.preventDefault();
      //lay du lieu tu input
      const pokemon_name = document.getElementById("search_inp").value.trim();
       //neu khong co du lieu
       if (!pokemon_name){
        alert("Vui long nhap ten nhan vat");
       } else {
        search_pokemon(pokemon_name);
       }
  });
