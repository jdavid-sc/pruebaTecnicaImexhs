import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReposService } from '../../services/repos.service';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HeaderComponent
],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.css'
})
export class SearchUserComponent {

  public reposService = inject(ReposService)

  formulario!: FormGroup;
  formValid = true;
  errorMessage!: string;
  UsuarioNoEncontrado:boolean = false;

  repos: any[] = [];        // Todos los repos
  reposPaginados: any[] = []; // Solo los repos de la página actual
  paginaActual: number = 1;
  reposPorPagina: number = 8;
  totalPaginas: number = 0;
  sinRepos: boolean = false;

  //Fomulario dinamico para obtener el usuario
  constructor(private fb: FormBuilder ){
    this.formulario = this.fb.group({
      usuario: ['', Validators.required]
    })
  }

  //Consulta a Github para recibir repositorios
  obtenerRepos(){
    if(this.formulario.valid){
      const { usuario } = this.formulario.value;
      this.sinRepos = false;
      console.log(usuario);
      this.reposService.getRepos(usuario).subscribe({
      next: (data) => {
        if(data.length === 0){
          this.sinRepos = true;
        }
        console.log(data)
        this.repos = data.map(repo => ({
          name: repo.name,
          description: repo.description,
          lenguaje: repo.lenguaje,
          stars: repo.stargazers_count,
          url: repo.html_url
        }));
  
        this.formValid = true;
        this.UsuarioNoEncontrado = false;
        this.totalPaginas = Math.ceil(this.repos.length / this.reposPorPagina);
        this.actualizarReposPaginados();
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('Error al obtener repositorios', err);
        if (err.status === 404) {
          this.UsuarioNoEncontrado = true;
          this.errorMessage = 'Usuario no encontrado.';
          this.repos = [];
          this.reposPaginados = [];
        } else {
          this.errorMessage = 'Ocurrió un error al buscar los repositorios.';
        }
      }
    });
  }else{
    this.formValid = false;
  }
    }
    
//Controlador paginador
  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.actualizarReposPaginados();
    }
  }
  //Controlador paginador
  paginaSiguiente() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      this.actualizarReposPaginados();
    }
  }
//Siguiente oagina de los repositorios
  actualizarReposPaginados() {
    const inicio = (this.paginaActual - 1) * this.reposPorPagina;
    const fin = inicio + this.reposPorPagina;
    this.reposPaginados = this.repos.slice(inicio, fin);
  }
//Lismpiar formulario
  limpiarFormulario(){
    this.formulario.reset();
    this.reposPaginados = [];
    this.UsuarioNoEncontrado = false
  }
}
