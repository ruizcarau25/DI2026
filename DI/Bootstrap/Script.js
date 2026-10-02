
$('#tabla-contenedor').on('click', '#añadir-fila', function () {
  var columnas = $('thead th').length - 1; 
  var fila = '<tr>';
  for (var i = 0; i < columnas; i++) fila += '<td>-</td>';
  fila += '<td class="acciones"><button class="btn btn-secondary eliminar-fila">Eliminar</button></td></tr>';
  $('tbody').append(fila);
});

$('#tabla-contenedor').on('click', '.eliminar-fila', function () {
  $(this).closest('tr').remove();
});

$('#tabla-contenedor').on('click', '#añadir-col', function () {
  var n = $('thead th').length;
  $('thead th.acciones').before('<th scope="col">Columna ' + n + '<button class="btn btn-sm btn-outline-danger ms-1 eliminar-col">×</button></th>');
  $('tbody td.acciones').before('<td>-</td>');
});

$('#tabla-contenedor').on('click', '.eliminar-col', function () {
  var i = $(this).closest('th').index();
  $('tr').each(function () {
    $(this).children().eq(i).remove();
  });
});

$('#tabla-contenedor').on('click', '#eliminar-tabla', function () {
  $('#tabla-contenedor').remove();
});