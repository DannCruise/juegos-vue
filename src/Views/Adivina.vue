<script setup>
import { CRow, CCol,CCard,CCardHeader,CCardBody,CInputGroupText,CInputGroup,CFormInput,CAlert,CButton } from '@coreui/bootstrap-vue';
import {ref} from 'vue'
import Swal from 'sweetalert2'
const nivel = ref(0);
const intentos = ref(null);
const numero = ref(null);
const puntos = ref(0);
const min = ref(1);
const max = ref(100);
const pista = ref('');
const aleatorio = ref(0);
const tope = ref(0);

const jugar = () =>{
    if(numero.value === null){
        show_alerta('Escribe un número','del '+min.value+' al '+max.value,'warning','numero');
    }
    else if(numero.value == aleatorio.value){
        nivel.value++;
        show_alerta('Felicidades!!! Has adivinado, el número fue '+
        aleatorio.value,'Pasarás al nivel '+nivel.value,'success','numero');
        max.value = max.value + 10;
        console.log('Pts: '+puntos.value+' intentos: '+intentos.value+' Tope: '+tope.value);
        puntos.value = ((tope.value - intentos.value) == 0)
        ? puntos.value + 100 : puntos.value + (100-(tope.value - intentos.value) * 10);
        intentos.value = tope.value;
        aleatorio.value = generarNumero();
        console.log(aleatorio.value);
    }
    else{
        if(intentos.value === 1){
        show_alerta('Suerte para la próxima, el número fue: '+
        aleatorio.value,'Tu puntaje fue de '+puntos.value,'error');
        nivel.value = 0;
        reiniciar();//Si no quieres reiniciar  comenta esta línea
        // y descomenta la siguiente:
        //puntos.value = 0;
        }
        else{
        pista.value = (numero.value > aleatorio.value) ? 'mayor':'menor';
        show_alerta('No has adivinado, aún puedes lograrlo',
        'Pista: el número '+numero.value+' es '+pista.value+' al número aleatorio',
        'error','numero');
        }
        intentos.value --;
    }
    numero.value = null;

}
const iniciar = () =>{
    if(intentos.value === null || intentos.value < 1 || intentos.value > 10){
        show_alerta('Escribe un número del 1 al 10','','warning','intentos');
        intentos.value = null;
    }
    else{
        tope.value = intentos.value;
        aleatorio.value = generarNumero();
        console.log(aleatorio.value);
        nivel.value++;
        window.setTimeout(function(){
            document.getElementById('numero').focus();
        },500);
    }
}
const show_alerta = (msj,txt,icono,foco='') =>{
        if(foco !== ''){
          document.getElementById(foco).focus();
        }
        Swal.fire({
          title:msj,text:txt,icon:icono,
          customClass:{confirmButton:'btn btn-primary', popup:'animated zoomIn'},
          buttonsStyling:false
        });
      }

const generarNumero = () =>{
    let num = Math.floor(Math.random() * (Math.floor(max.value) -
    Math.ceil(min.value) + 1 )+ min.value);
    return num;
}
const reiniciar = () =>{
    window.setTimeout(function(){
        window.location.reload();
    },7000);
}
</script>
<template>
    <CRow>
        <CCol md="12">
            <CAlert color="info">
                Adivina número
                <ol>
                <li>Tú eliges el número de intentos</li>
                <li>Al inicio se generará un número aleatorio entre 1 y 100</li>
                <li>Conforme avances de nivel la complejidad aumentará</li>
                </ol>
            </CAlert>
        </CCol>
        <CCol md="12">
            <CCard >
                <CCardHeader class="bg-success">
                    <label v-if="nivel === 0"></label>
                    <label class="text-white" v-else>
                        Nivel: <b>{{ nivel }}</b>   Puntos: <b>{{ puntos }}</b>
                    </label>
                </CCardHeader>
                <CCardBody>
                    <CRow>
                        <CCol md="6" lg="3">
                            <CInputGroup class="mb-3">
                            <CInputGroupText ><i class="fa-solid fa-question"></i></CInputGroupText>
                            <CFormInput type="number" id="intentos" min="1" max="10" 
                            placeholder="Número de intentos" v-model="intentos" 
                            v-on:keyup.enter="iniciar()" autofocus/>
                            </CInputGroup>
                        </CCol>
                        <CCol md="6" lg="3" v-if="nivel === 0" class="mb-3">
                            <CButton color="info" @click="iniciar()">
                            <i class="fa-solid fa-circle-check"></i> Iniciar!
                            </CButton>
                        </CCol>
                        <CCol md="6" lg="3" v-else>
                            <label class="h2">Intentos restantes:</label>
                            <label class="text-danger h2"> {{ intentos }}</label>
                        </CCol>
                        <CCol md="6" lg="3">
                            <CInputGroup class="mb-3">
                            <CInputGroupText ><i class="fa-solid fa-question"></i></CInputGroupText>
                            <CFormInput type="number" id="numero" :disabled="nivel === 0"
                            :placeholder="'Número entre '+min+' y '+max" v-model="numero" 
                            v-on:keyup.enter="jugar()"/>
                            </CInputGroup>
                        </CCol>
                        <CCol md="6" lg="3">
                            <CButton color="dark" @click="jugar()" :disabled="nivel === 0">
                            <i class="fa-solid fa-wand-magic-sparkles"></i> Adivinar
                            </CButton>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
</template>