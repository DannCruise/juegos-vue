<script setup>
    import { CRow, CCol,CCard,CCardHeader,CCardBody,CButton } from '@coreui/bootstrap-vue';
    import {ref} from 'vue'
    import Swal from 'sweetalert2'
    import colorVue from '../components/Color.vue';
    const nivel = ref(0);
    const turno = ref('pc');
    const colores = ['g','r','y','b'];
    const simon = ref([]);
    const respuesta = ref([]);
    const indice = ref(0);

    const seleccion = (data) =>{
        if(turno.value === 'user'){
        respuesta.value.push(data);
        comparar();
      }
    }
    const comparar = () =>{
        console.log('resp: '+respuesta.value[indice.value]+' sim:'+simon.value[indice.value]);
        if( respuesta.value[indice.value] === simon.value[indice.value]){
        indice.value++;
        if(indice.value === nivel.value){
          respuesta.value = [];
          simon.value = [];
          setTimeout( () => jugar(), 600);
        }
      }
      else{
        Swal.fire({
          title:'Oh no... te equivocaste!',
          text:'Llegaste al nivel '+nivel.value,
          icon:'error',
          customClass:{confirmButton:'btn btn-primary', popup:'animated zoomIn'},
          buttonsStyling:false
        });
        nivel.value = 0;
        indice.value = 0;
        respuesta.value = [];
        simon.value = [];
        turno.value = 'pc';
      }
    }

    const aleatorio = () => {
      return Math.floor(Math.random() * 4);
    }

    const jugar = () => {
        indice.value =0;
        turno.value= 'pc';
        nivel.value++;
        for(let i = 1; i <= nivel.value; i++){
            let num = colores[aleatorio()];
            simon.value.push(num);
            setTimeout( () => document.querySelector('#'+num).click(),
            600 * (simon.value.length));
        }
        setTimeout( ()=> turno.value = 'user',600 * (simon.value.length));

    }
</script>
<template>
    <CRow>
        <CCol :md="{ span: 10, offset: 1 }" :lg="{ span: 6, offset: 3 }">
            <CCard class="border-dark">
                <CCardHeader class="bg-info"><label v-if="nivel > 0">Nivel: <b>{{ nivel }}</b></label></CCardHeader>
                <CCardBody>
                    <CRow class="row-cols-2">
                        <colorVue class="bg-success" :color="'g'" @elegir="seleccion"></colorVue>
                        <colorVue class="bg-danger" :color="'r'" @elegir="seleccion"></colorVue>
                        <colorVue class="bg-warning" :color="'y'" @elegir="seleccion"></colorVue>
                        <colorVue class="bg-primary" :color="'b'" @elegir="seleccion"></colorVue>
                    </CRow>
                    <CRow class="mt-3">
                        <CCol :md="{ span: 6, offset: 3 }">
                            <div class="d-grid col-10 mx-auto">
                                <CButton color="dark" @click="jugar()" v-if="nivel === 0">
                                    <i class="fa-solid fa-play"></i> Jugar
                                </CButton>
                            </div>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
</template>