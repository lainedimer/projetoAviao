class Table {

    static append(data) {

        let td = "<tr><td><input checked name='table-check' " + data.id + " type='checkbox' value=" + data.id + "></td>" +
                  "<td id=" + data.id + ">" + data.id + "</td>" +
                  "<td>" + data.x + "</td>" +
                  "<td>" + data.y + "</td>" +
                  "<td>" + data.raio + "</td>" +
                  "<td>" + data.angulo + "</td>" +
                  "<td>" + data.velocidade + "</td>" +
                  "<td>" + data.direcao + "</td></tr>";

        $("#table-body").append(td);
    }

    static update(data) {
      var tb = $("#table-body");

      tb.empty();

      data.forEach(function (v) {
        Table.append(v);
      });
    }
}