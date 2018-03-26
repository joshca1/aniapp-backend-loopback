var app = require('../server');


var dataSource = app.dataSources.postgresqldb;

dataSource.automigrate('animalitos', function(err) {
	if (err) throw err;
	dataSource.disconnect();
});

dataSource.automigrate('agencia',function(err) {
	if(err) throw err;
	dataSource.disconnect();
});

dataSource.automigrate('sorteos',function(err) {
        if(err) throw err;
        dataSource.disconnect();
});


dataSource.automigrate('apuestas',function(err) {
        if(err) throw err;
        dataSource.disconnect();
});

dataSource.automigrate('saldos',function(err) {
        if(err) throw err;
        dataSource.disconnect();
});

dataSource.automigrate('bancos',function(err) {
        if(err) throw err;
        dataSource.disconnect();
});

dataSource.automigrate('cuenta_bancos',function(err) {
        if(err) throw err;
        dataSource.disconnect();
});



dataSource.automigrate('recargas',function(err) {
        if(err) throw err;
        dataSource.disconnect();
});

dataSource.automigrate('cta_banco_usuario',function(err) {
        if(err) throw err;
        dataSource.disconnect();
});

dataSource.automigrate('retira_saldo',function(err) {
        if(err) throw err;
        dataSource.disconnect();
});


