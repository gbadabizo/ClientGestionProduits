import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProduitService } from './produit.service';
import { Produit } from '../shared/produit';
import { from } from 'rxjs';
@Component({
selector: 'app-produit',
templateUrl: './produit.component.html',
styleUrls: ['./produit.component.css']
})

export  class ProduitComponent implements OnInit {
    private produits : Produit[]
    produitForm : FormGroup ;
    constructor(private produitService: ProduitService, private fb: FormBuilder){
        this.produitForm = this.fb.group({
            ref:['', Validators.required],
            quantite:'',
            prixUnitaire:''
        }) ;
    }
    ngOnInit(){
       this.loadProduits();
       
    }
    loadProduits(){
        //console.log("bonjour les produits");
        this.produitService.getProduits().subscribe(
            data =>{this.produits= data },
            error =>{ console.log("An error was occured")},
            () =>{console.log('loading produits was done')}

        );
       
       
    }

}