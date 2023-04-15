import  Data  from '../../data'

export default function Person(req,res) {
  res.status(200).json(Data)
}