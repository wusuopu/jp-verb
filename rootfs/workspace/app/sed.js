const fs = require('fs-extra')

const main = async () => {
  let argv = process.argv.slice(2)
  let pattern = argv[0]
  let env = argv[1]
  let file = argv[2]
  let output = argv[3] || file

  if (!pattern) {
    console.error('pattern is missing')
    return
  }
  if (!env) {
    console.error('env is missing')
    return
  }
  if (!file || !(await fs.exists(file))) {
    console.error('file is not exists')
    return
  }

  console.log(`replace ${file} ${pattern}`)
  let content = await fs.readFile(file, 'utf-8')
  let newContent = content.replace(new RegExp(pattern), process.env[env] || '')
  await fs.writeFile(output, newContent, 'utf-8')
}

main()
