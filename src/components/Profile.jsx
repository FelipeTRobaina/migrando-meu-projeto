// src/components/Profile.jsx
import minhaFoto from '../assets/imagemdeperfil.jpg'; 

function Profile() {
  // Tem que ter o RETURN e os parênteses!
  return (
    <div className="perfil-card">
      <img src={minhaFoto} alt="Foto" className="foto-perfil" />
      <p className="nome-usuario">@fulano de tal</p>
    </div>
  );
}

export default Profile;