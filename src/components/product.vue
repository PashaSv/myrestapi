<template>
    <div class="card">
        <div class="card-body">
            {{ product.name }}
        </div>
        <div class="card-text" :data="product.text">
            {{ product.text }}
        </div>
        <div class="card-btn">
            <button class="btn-change" @click="form = !form">Change</button>
            <button class="btn-delete" @click="deleteProduct(product.id)">Delete</button>
        </div>
        <form @submit.prevent="validateData(product.id)" v-if="form">
            <input type="text" placeholder="Input name" v-model="name">
            <input type="text" placeholder="Input text" v-model="text">
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data() {
            return {
                name: '',
                text: '',
                form: false
            }
        },
        props: {
            product: {
                type: Object,
                default: () => {}
            },
        },
        methods: {
            validateData(id) {
                if (this.name.length <= 3) {
                    alert('fail name')
                    return null
                }

                if (this.text.length <= 10) {
                    alert('fail text')
                    return null
                }

                return this.changeProduct(id)
            },
            changeProduct(id) {
                axios.put('http://localhost:8081/api/products/'+id,
                    {
                        name: this.name, 
                        text: this.text
                    }
                )
                .then(res => {
                    this.$emit('products', res.data)
                })
            },
            deleteProduct(id) {
                axios.delete('http://localhost:8081/api/products/'+id).then(res => {
                    this.$emit('products', res.data)
                })
            }
        }
    }
</script>

<style scoped>
.card {
    display: inline-block;
    border: 1px solid #ccc;
    padding: 5px;
    width: 33%;
    margin: 10px 20px;
    border-radius: 10px;
}
.card-body {
    text-align: center;
    padding: 5px;
    font-size: 24px;
    font-weight: bold;
}
.card-text {
    height: 100px;
    overflow-y: scroll;
}

.card-btn {
    margin: 10px;
}
.card-btn button {
    margin: 10px 10px;
    cursor: pointer;
}

.btn-change {
    background: blue;
    color: white;
    padding: 8px;
    border: 0;
    border-radius: 5px;
}
.btn-delete {
    background: red;
    color: white;
    padding: 8px;
    border: 0;
    border-radius: 5px;
}
</style>