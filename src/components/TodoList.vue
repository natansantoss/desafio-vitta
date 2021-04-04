<template>
  <div id="app">
    <div class="container">
        <div class="header">
            <div class="message">
                <h2 class="welcome">Bem Vindo(a)</h2>
                <p class="description">Um site para que você mantenha suas tarefas organizadas<br> para consultar quando quiser</p>
            </div>
            <div class="create">
                <div action="" class="create-forn">
                    <span class="text-info">título</span>
                    <input type="text" id="title" maxlength="50" required v-model="newTodo.title">
                    <div class="date-time">
                        <div class="date">
                            <span class="text-info">Data</span>
                            <input type="date" style="width: 90%;" v-model="newTodo.date">
                        </div>
                        <div class="time">
                            <span class="text-info">Hora</span>
                            <input type="time" v-model="newTodo.time">
                        </div>
                    </div>
                    <span class="text-info">Duração</span>
                    <select name="during" v-model="newTodo.during">
                        <option value="5 ">5 min</option>
                        <option value="10">10 min</option>
                        <option value="15">15 min</option>
                        <option value="20">20 min</option>
                        <option value="25">25 min</option>
                        <option value="30">30 min</option>
                    </select>
                    <span class="text-info">Alerta</span>
                    <select name="alert" v-model="newTodo.alert">
                        <option value="not">Sem Alerta</option>
                        <option value="5 ">5 min</option>
                        <option value="10">10 min</option>
                        <option value="15">15 min</option>
                        <option value="20">20 min</option>
                        <option value="30">30 min</option>
                    </select>

                    <button class="create-btn" v-on:click="crateNewTodo">cirar</button>
                </div>
            </div>
        </div>
    </div>

    <div class="filters">

      <input class="search" type="text" placeholder="pesquisar uma tarefa" v-model="inputSearch" @change="filter">
      <select name="filter" v-model="showStatus" @change="filter">
        <option value="all">todas</option>
        <option value="complete">completa</option>
        <option value="pending">pendente</option>
      </select>
      <input class="date" type="date" v-model="inputDate" @change="filter">
    </div>

    <div class="base">
      <div class="tasks">

        <div class="task" v-for="todo in filter" v-bind:key="todo.id">
          <div class="title-task">
            <p class="title">
              {{todo.title || "Titulo não informado"}}
            </p>
            <button class="delete" @click="removeTodo(todo)">X</button>
          </div>
          <div class="date-time">
            <span class="date">
              {{formatDate(todo.date) || "Data não informada"}}
            </span>
            <span class="time">
              {{todo.time  || "Hora não informada"}}
            </span>
          </div>
          <hr>
          <div class="info">
            <div class="info-time">
              <span class="during">
               Duração de<br>{{todo.during || "?"}} Minutos
              </span>
              <span class="alert">
                Alerta de<br>{{todo.alert || "?"}} Minutos
              </span>
            </div>
          </div>

          <div class="checked-crt">
            <div class="checked">
              <select name="status" class="checked"   @change="changeStatusChecked(todo)">
                <option value="pending">Pendente</option>
                <option value="complete ">completa</option>
              </select>
            </div>

            <div class="creation">
              <p>Data de criação<br> {{todo.id}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { date } from '../features/date'
import { filterByStatus, filterByText, filterByDate } from '../features/filters'

export default {
  name: 'TodoList',
  changeStatus: 'all',

  data () {
    return {
      inputSearch: '',
      showStatus: 'all',
      inputDate: '',
      changeChecked: 'pending',

      todoList: [
        {
          id: '2/3/2021 às 23:41:21',
          checked: 'pendings',
          title: 'Criar um Todo',
          date: '2021-04-04',
          time: '18:59',
          during: '10',
          alert: '5'
        },
        {
          id: '2/3/2021 às 23:41:31',
          checked: 'pendings',
          title: 'Enviar Todo',
          date: '04/04/2021',
          time: '20:00',
          during: '10',
          alert: '10'
        }
      ],

      newTodo: {
        id: date(),
        checked: 'pendings'
      }
    }
  },

  methods: {
    crateNewTodo () {
      if (Object.values(this.newTodo).length !== 7) {
        alert('complete todos os campos ')
        return 0
      } else {
        this.todoList.push(this.newTodo)
        this.newTodo = {
          id: date(),
          checked: 'pendings'
        }
      }
    },

    formatDate (date) {
      var dataFormat = date.split('-').reverse().join('/')
      return dataFormat
    },

    changeStatusChecked (todo) {
      if (todo.checked === 'pendings') {
        todo.checked = 'complete'
      } else if (todo.checked === 'complete') {
        todo.checked = 'pendings'
      }
      console.log(todo)
    },

    removeTodo (todo) {
      var selectTodo = this.todoList.filter(i => { return i.id === todo.id })
      var positionTodo = this.todoList.indexOf(selectTodo[0])
      this.todoList.splice(positionTodo, 1)
    }
  },

  computed: {
    filter () {
      var resultsFilte = []

      resultsFilte = filterByStatus(this.showStatus, this.todoList)
      if (this.inputSearch !== '') {
        console.log('a')
        resultsFilte = filterByText(this.inputSearch, resultsFilte)
      }
      if (this.inputDate !== '') {
        resultsFilte = filterByDate(this.inputDate, resultsFilte)
      }

      return resultsFilte
    }
  }
}
</script>

<style src='./todoList.css' scoped>
