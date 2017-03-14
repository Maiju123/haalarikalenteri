const Controller = require('../../lib/controller');
const eventFacade  = require('./event-facade');

class EventController extends Controller {}

module.exports = new EventController(eventFacade);
