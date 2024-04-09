<script setup>
import { CRow, CCol,CCard,CCardHeader,CCardBody } from '@coreui/bootstrap-vue';
</script>
<template>
    <CRow>
        <CCol md="12">
            <p class="h2 text-center">2 divertidos ejercicios en VUE 3 usando composition API <img src="/src/assets/vue.svg"></p>
        </CCol>
        <CCol md="6">
            <CCard class="border border-warning shadow mb-3">
                <CCardHeader class="bg-warning">Simón dice</CCardHeader>
                <CCardBody>
                    <p>
                        Es un juego para desarrollar la memoria visual y auditiva. Se trata de presta mucha atención a las notas musicales y los colores para repetir la secuencia.
                    </p>
                    <p>Si aciertas, el nivel aumenta y las secuencias serán más largas y complejas.</p>
                </CCardBody>
            </CCard>
        </CCol>
        <CCol md="6">
            <CCard class="border border-warning shadow">
                <CCardHeader class="bg-warning">Adivina número</CCardHeader>
                <CCardBody>
                    <p>
                        Es un divertido juego en el que tiene que adivinar un número generado aleatoriamente en cierto número de intentos.
                    </p>
                    <p>
                        Después de cada oportunidad te va mostrando una pista acerca del número.
                    </p>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
</template>