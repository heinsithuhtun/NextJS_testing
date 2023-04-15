import smallData from '../../smallData'

export default function small(req,res){
  res.status(200).json(smallData)
}