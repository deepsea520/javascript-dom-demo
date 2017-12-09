/*
 * @Author: Levi丶lxh 
 * @Date: 2017-12-07 14:07:54 
 */

function createTable(element, json) {
    // 创建table 添加到 body
    var table = document.createElement("table");
    // 添加类名 my_table
    table.className = "my_table";
    // 添加到element中
    element.appendChild(table);

    // 创建thead，添加到 table
    var thead = document.createElement("thead");
    table.appendChild(thead);

    // 创建tr 添加到thead中
    var tr = document.createElement("tr");
    thead.appendChild(tr);

    // 根据数据的长度创建th，并添加到tr里
    var header = json.header;
    for (var i = 0; i < header.length; i++) {
        var th = document.createElement("th");
        tr.appendChild(th);
        th.innerHTML = header[i];
    }

    // 单独再添加一个按钮
    var th = document.createElement("th");
    tr.appendChild(th);
    th.innerHTML = "操作";


    // 创建 tbody 添加到 table
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    // tbody.className = "my_tbody";

    // 根据 json的datas.length创建tr
    var datas = json.datas;
    for (var i = 0; i < datas.length; i++) {
        var tr = document.createElement("tr");
        tbody.appendChild(tr);

        // 根据 datas[i] 创建td
        for (key in datas[i]) {
            var td = document.createElement("td");
            tr.appendChild(td);
            td.innerHTML = datas[i][key];
        }

        //创建 一个操作按钮
        var td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = "<a href='javascript:void(0);'>删除</a>";

        // 给a标签注册点击事件
        td.children[0].onclick = function() {
            // 点击这个删除按钮的时候，删除这一行 tr
            tbody.removeChild(this.parentNode.parentNode);
        }

    }
    return table;
}