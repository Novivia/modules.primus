/**
 * Copyright 2013-present, Novivia, Inc.
 * All rights reserved.
 */

import primusEmitter from "primus-emitter";
import primusMultiplex from "primus-multiplex";
import primusResource from "primus-resource";

export {default as Primus} from "primus";

export const config = {
  plugin: {
    emitter: primusEmitter,
    multiplex: primusMultiplex,
    resource: primusResource,
  },
  transformer: "sockjs",
};
