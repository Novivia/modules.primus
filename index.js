import primusEmitter from "primus-emitter";
import primusMultiplex from "primus-multiplex";
import primusResource from "primus-resource";

export {default as Primus} from "primus";

export const config = {
  plugin: {
    multiplex: primusMultiplex,
    emitter: primusEmitter,
    resource: primusResource,
  },
  transformer: "sockjs",
};
