// 'Please create a custom hook in the "@app/domain" package to access the "@app/domain" hooks',

const patterns = {
  group: ['@app/domain', '@app/domain/*'],
  message:
    'Sorry, but it is not allowed to import "@app/domain" in this package',
}

export default patterns
