class Table {

    static append(data) {

        let td = "<tr><td><input type='checkbox'></td>" +
                  "<td>ID</td>" +
                  "<td>" + data.x + "</td>" +
                  "<td>" + data.y + "</td>" +
                  "<td>" + data.raio + "</td>" +
                  "<td>" + data.angulo + "</td>" +
                  "<td>" + data.velocidade + "</td>" +
                  "<td>" + data.direcao + "</td></tr>";

        $("#table-body").append(td);
    }
}