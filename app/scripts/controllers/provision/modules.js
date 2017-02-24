'use strict';
angular.module('softvFrostApp').config(provisionConf);

function provisionConf($stateProvider) {
	var states = [{
			name: 'home.provision',
			abstract: true,
			template: '<div ui-view></div>'
		},
		{
			name: 'home.provision.suscriptores',
			data: {
				pageTitle: 'SOFTV | SUSCRIPTORES',
				permissions: {
					only: ['suscriptoresSelect'],
					options: {
						reload: true
					}
				}
			},
			url: '/provision/suscriptores',
			templateUrl: 'views/provision/suscriptores.html',
			controller: 'SuscriptorCtrl',
			controllerAs: '$ctrl'
		}, {
			name: 'home.provision.terminales',
			data: {
				pageTitle: 'SOFTV | Terminales',
				permissions: {
					only: ['terminalesSelect'],
					options: {
						reload: true
					}
				}
			},
			url: '/provision/terminales',
			templateUrl: 'views/provision/Terminales.html',
			controller: 'TerminalCtrl',
			controllerAs: '$ctrl'
		},
		{
			name: 'home.provision.terminalesNueva',
			data: {
				pageTitle: 'SOFTV | Terminales',
				permissions: {
					only: ['terminalesAdd'],
					options: {
						reload: true
					}
				}
			},
			url: '/provision/terminales/nueva',
			templateUrl: 'views/provision/NuevaTerminal.html',
			controller: 'NuevaTerminalCtrl',
			controllerAs: '$ctrl'
		},
		{
			name: 'home.provision.terminalesEdita',
			data: {
				pageTitle: 'SOFTV | Terminales',
				permissions: {
					only: ['terminalesUpdate'],
					options: {
						reload: true
					}
				}
			},
			url: '/provision/terminales/edita/:Id',
			templateUrl: 'views/provision/NuevaTerminal.html',
			controller: 'EditaTerminalCtrl',
			controllerAs: '$ctrl'
		},
		{
			name: 'home.provision.terminalesmovimientos',
			data: {
				pageTitle: 'SOFTV | Terminales',
			},
			url: '/provision/terminales/movimientos',
			templateUrl: 'views/provision/MovimientosTerminales.html',
			controller: 'TerminalMovimientosCtrl',
			controllerAs: '$ctrl'
		},
		{
			name: 'home.provision.suscriptoresNuevo',
			data: {
				pageTitle: 'SOFTV | NUEVO SUSCRIPTOR',
				permissions: {
					only: ['suscriptoresAdd'],
					options: {
						reload: true
					}
				}
			},
			url: '/provision/nuevo/suscriptor',
			templateUrl: 'views/provision/nuevoSuscriptor.html',
			controller: 'NuevoSuscriptorCtrl',
			controllerAs: '$ctrl'
		},
		{
			name: 'home.provision.suscriptoresEditar',
			data: {
				pageTitle: 'SOFTV | EDITAR SUSCRIPTOR',
				permissions: {
					only: ['suscriptoresUpdate'],
					options: {
						reload: true
					}
				}
			},
			url: '/provision/editar/suscriptor/:id',
			templateUrl: 'views/provision/editarSuscriptor.html',
			controller: 'EditarSuscriptorCtrl',
			controllerAs: '$ctrl'
		}
	];

	states.forEach(function(state) {
		$stateProvider.state(state);
	});
}
