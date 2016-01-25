# Primus

This module packages frozen versions of both the client and server for the
Primus websockets library, the plugins it uses and the transport it uses, namely
SockJS.

The rationale behind this module is that Primus does not ship with its client,
the client has to be built by the server and it will depend on the settings
provided to the server. This could become problematic as any dependency update
could cause a discrepancy between the client and the server, who communicate
with each other. Therefore, by ensuring both the client(s) and the server(s)
always use the same version of this module, any problem due to a dependency
mismatch should be mitigated.
