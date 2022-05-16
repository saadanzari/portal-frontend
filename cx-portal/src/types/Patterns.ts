const Patterns = {
  BPN: /^BPNL[0-9]{12}$/i,
  URL: /^((https?):\/\/([^:/\s]+))/,
  MAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  NAME: /^([A-Za-zÀ-ÿ-,.']{1,40}[ ]?){1,8}$/i,
}

export default Patterns