const ncm = require('./tool/ncm')

const thisSuffix = matches.bestMatch.target.substring(matches.bestMatch.target.lastIndexOf('.'))

if (thisSuffix === '.ncm') {
  ncm(enter + '/' + matches.bestMatch.target, path + '/' + fileName + '.flac', fileName)
} else {
  fs.copyFileSync(enter + '/' + matches.bestMatch.target, path + '/' + matches.bestMatch.target)
}
