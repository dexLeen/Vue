<template>
    <div style="padding:20px;">
        <div class="panel panel-primary">
            <h1 class="panel-heading">用户管理</h1>
            <table class="table table-bordered table-striped text-center">
                <thead>
                <tr>
                    <th>用户名</th>
                    <th>年龄</th>
                    <th>毕业学校</th>
                    <th>备注</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="row in rows ">
                    <tr>
                        <td>{{row.Name}}</td>
                        <td>{{row.Age}}</td>
                        <td>{{row.School}}</td>
                        <td>{{row.Remark}}</td>
                        <td>
                            <a href="javascript:void(0);" @click="editInfo(row)">编辑</a>
                            <a href="javascript:void(0);" @click="deleteById(row.Id)">删除</a>
                        </td>
                    </tr>
                </template>
                <tr>
                    <td>
                        <input type="text" class="form-control" v-model="rowTemplate.Name"/>
                    </td>
                    <td>
                        <input type="text" class="form-control" v-model="rowTemplate.Age"/>
                    </td>
                    <td>
                        <select class="form-control" v-model="rowTemplate.School">
                            <option>中山小学</option>
                            <option>复兴中学</option>
                            <option>光明小学</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" class="form-control" v-model="rowTemplate.Remark"/>
                    </td>
                    <td>
                        <button type="button" class="btn btn-primary" v-on:click="save">保存</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  let data = {
    rows: [
      {
        Id: 1,
        Name: '小明',
        Age: 18,
        School: '光明小学',
        Remark: '三好学生'
      },
      {
        Id: 2,
        Name: '小刚',
        Age: 20,
        School: '复兴中学',
        Remark: '优秀班干部'
      },
      {
        Id: 3,
        Name: '吉姆格林',
        Age: 19,
        School: '光明小学',
        Remark: '吉姆做了汽车公司经理'
      },
      {
        Id: 4,
        Name: '李雷',
        Age: 25,
        School: '复兴中学',
        Remark: '不老实的家伙'
      },
      {
        Id: 5,
        Name: '韩梅梅',
        Age: 22,
        School: '光明小学',
        Remark: '在一起'
      }
    ],
    rowTemplate: {
      Id: 0,
      Name: '',
      Age: '',
      School: '',
      Remark: ''
    }
  }
  export default {
    data () {
      return data;
    },
    methods: {
      save: function (event) {
        if (
          !this.rowTemplate.Name ||
          !this.rowTemplate.Age ||
          !this.rowTemplate.School
        ) {
          alert('Can\'t save a empty data!')
          return false
        }

        if (this.rowTemplate.Id === 0) {
          //设置当前新增行的Id
          this.rowTemplate.Id = this.rows.length + 1
          this.rows.push(this.rowTemplate)
        }

        //还原模板
        this.rowTemplate = {
          Id: 0,
          Name: '',
          Age: '',
          School: '',
          Remark: ''
        }
      },
      deleteById: function (id) {
        //实际项目中参数操作肯定会涉及到id去后台删除，这里只是展示，先这么处理。
        for (let i = 0; i < this.rows.length; i++) {
          if (this.rows[i].Id === id) {
            this.rows.splice(i, 1)
            break
          }
        }
      },
      editInfo: function (row) {
        this.rowTemplate = row
      }
    }
  }
</script>

