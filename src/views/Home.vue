<template>
  <div class="home container">
    <!--header-->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Mijini-tech Invoices</h1>
        <span>There are 4 total invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span>Filter by status</span>
          <img src="@/assets/icon-arrow-down.svg" alt=""/>
          <ul v-show="filterMenu" class="filter-menu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice" class="button flex">
          <div class="inner-button flex">
            <img src="@/assets/icon-plus.svg" alt=""/>
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>
<<<<<<< HEAD
    <!--invoices-->
    <div v-if="invoiceData.length>0">
      <Invoice v-for="(invoice, index) in invoiceData" :invoice="invoice" :key="index" />
    </div>
    <div v-else class="empty flex flex-column">
      <img src="@/assets/illustration-empty.svg" alt=""/>
      <h3>your invoice space is empty</h3>
      <span>
        Create a new invoice by clinking the<h4>New Invoice button</h4>
      </span>
    </div>
=======
>>>>>>> b23f3e5dc70d12857bde67920fe0874a9b71f2ac
  </div>
</template>

<script>
<<<<<<< HEAD
import Invoice from "../components/Invoice"
import {mapMutations, mapState} from "vuex"
=======
import {mapMutations} from "vuex"
>>>>>>> b23f3e5dc70d12857bde67920fe0874a9b71f2ac
export default {
  name: "Home",
  data(){
    return{
      filterMenu:null,
    }
  },
<<<<<<< HEAD
  components: {
    Invoice,
  },
=======
  components: {},
>>>>>>> b23f3e5dc70d12857bde67920fe0874a9b71f2ac
  methods:{
    ...mapMutations(["TOGGLE_INVOICE"]),
    newInvoice(){
      this.TOGGLE_INVOICE();
    },

    toggleFilterMenu(){
      this.filterMenu=!this.filterMenu;
    },
  },
<<<<<<< HEAD
  computed:{
    ...mapState(["invoiceData"]),
  }
=======
>>>>>>> b23f3e5dc70d12857bde67920fe0874a9b71f2ac
};
</script>

<style lang="scss" scoped>
.home{
  color:#ffff;

 .header{
  margin-bottom:65px;

  .left,
  .right{
    flex:1;
  }

  .right{
    justify-content: flex-end;
    align-items: center;

    .button,
    .filter{
      align-items: center;

      span{
        font-size: 12px;
      }
    }

    .filter{
      position: relative;
      margin-right:40px;
      cursor: pointer;

      img{
        margin-left:12px;
        width: 9px;
        height: 5px;
      }
      .filter-menu{
        width: 120px;
        position: absolute;
        top: 25px;
        list-style: none;
        background-color:#1e2139;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px  rgba(0,0,0,0.06);

        li{
          cursor: pointer;
          font-size: 12px;
          padding: 10px 20px;

          &:hover{
            color: #1e2139;
            background-color: white;
          }
        }
      }
    }
    .button{
      padding: 8px 10px;
      background-color: #a85d9c;
      border-radius:40px;

      .inner-button{
        margin-right: 8px;
        border-radius: 50%;
        padding: 8px;
        align-items: center;
        justify-content: center;
        background-color: #ffff;
      

        img{
          width: 10px;
          height:10px;
        }
      }
    }
  }
 }
<<<<<<< HEAD

 .empty{
   margin-top: 160px;
   align-items: center;

   img{
     width:214px;
     height: 200px;
   }

   h3{
     font-size: 20px;
     margin-top: 40px;
   }

   span{
     text-align: center;
     max-width: 224px;
     font-size:12px;
     font-weight: 300;
     margin-top: 16px;
   }
 }
=======
>>>>>>> b23f3e5dc70d12857bde67920fe0874a9b71f2ac
}
</style>