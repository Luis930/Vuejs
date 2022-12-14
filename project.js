const app = new Vue({
    el:'#app',
    data:{
        titulo:'Hola Mundo con Vue',
        frutas:[
        {nombre:'Manzana',cantidad:10},
        {nombre:'Pera',cantidad:0},
        {nombre:'Uva',cantidad:5}    
        ],
        nuevaFruta:"",
        total:0
    },
    methods:{
        agregarFruta(){
            this.frutas.push({
                nombre:this.nuevaFruta, cantidad:0
            });
            this.nuevaFruta='';
        }           
    },
    computed:{
        sumarFruta(){
            this.total=0;
            for(fruta of this.frutas){
                this.total=this.total + fruta.cantidad;
            }
            return this.total
        }
    }
})