import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

const MyPlugin = {
  install : function(Vue){

    // Initialize services API connection
    const socket = io("https://solar.friz.xyz/")
    const api = feathers()
    
    api.configure(
      socketio(socket, {
        timeout: 30000,
      })
    )
    
    Vue.prototype.$api = api
  } 
}
export default MyPlugin
