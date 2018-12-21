import ethUtils from 'ethereumjs-util'

const isHex = str => typeof str === 'string' && str.startsWith('0x')

export const hexToNumberString = str => toBigNumber(str).toString(10)

export const toBigNumber = str => {
  /**
   web3.utils.isHex(estimatedGas)
      ? new BigNumber(web3.utils.hexToNumberString(estimatedGas))
      : new BigNumber(estimatedGas)
   */
  return isHex(str) ? new BigNumber(hexToNumberString(str)) : new BigNumber(str)
}

export const weiToEther = valWei => {
  return toBigNumber(valWei).div(new BigNumber('1000000000000000000'))
}

export const etherToGwei = valEther => {
  return new BigNumber(valEther).mul(new BigNumber('1000000000'))
}

export const toUsd = (etherAmount = '0', etherPriceUSD) => {
  return parseFloat(
    toBigNumber(etherAmount).mul(toBigNumber(etherPriceUSD))
  ).toFixed(2)
}

export const networkIdToName = str => {
  return str
}

// FIXME wrapper for EthTools.formatBalance
export const formatBalance = () => {}
