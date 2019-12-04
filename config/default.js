module.exports = {
  middleware: {
    pva: {
      host: undefined,

      // Agent:
      //     TCP: 4433
      //     SSL: 4434
      //
      // MN:
      //     TCP: 4533
      //     SSL: 4534
      port: undefined,
    },
  },
  authentication: {
    username: undefined,
    password: undefined,

    // Realms:
    // System               "00000000-0000-0000-0000-000000000000"
    //
    // Builtin              "00000000-0000-0000-0000-000000000001"
    //
    // Session              "00000000-0000-0000-0000-000000000002"
    //
    // Forein security      "00000000-0000-0000-0000-000000000003"
    // security principal
    //
    // External System      "00000000-0000-0000-0000-000000000004"
    //
    // Virtuozzo Internal   "00000000-0000-0000-0000-000000000005"
    // (sql realm)
    //
    // Internal             "00000000-0000-0000-0000-000000000006"
    //
    // Auto realm           "00000000-0000-0000-0000-000000000007"
    // The server will try to determine proper realm automagically.
    realm:    undefined,
  }
}
