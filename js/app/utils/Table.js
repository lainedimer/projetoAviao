class Table {

    static append(id, data) {

        let td = "<tr><td><input name='table-check' type='checkbox' value=" + id + "></td>" +
                  "<td id=" + id + ">" + id + "</td>" +
                  "<td>" + data.x + "</td>" +
                  "<td>" + data.y + "</td>" +
                  "<td>" + data.raio + "</td>" +
                  "<td>" + data.angulo + "</td>" +
                  "<td>" + data.velocidade + "</td>" +
                  "<td>" + data.direcao + "</td></tr>";

        $("#table-body").append(td);
    }
}