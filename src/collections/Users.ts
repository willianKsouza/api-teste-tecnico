import { isAdmin } from '../payload/permissions/isAdmin'
import { CollectionConfig } from 'payload/types'
import { canAccessUsers } from '../payload/permissions/canAccessUsers'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'nome',
      type: 'text',
      required: true,
      saveToJWT: true,
    },
    {
      name: 'role',
      type: 'text',
      saveToJWT: true,
      admin: {
        readOnly:true
      },
      defaultValue:'user'
    
    },
  ],
  access:{
    create: isAdmin,
    read: canAccessUsers,
    update : canAccessUsers,
    delete: isAdmin,
  },
  
}

export default Users
