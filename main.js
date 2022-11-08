const app = Vue.createApp( {
	data () {
		return {
			cart: [],
			premium: true
		}
	},
	methods: {
		updCart ( id, isRemove ) {
			if ( !isRemove ) {
				this.cart.push( id )
			} else {
				const indexEl = this.cart.indexOf( id );
				this.cart.splice( indexEl, 1 );
			}

		}
	}
} )
