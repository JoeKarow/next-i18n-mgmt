import { trpc } from '~/utils/trpc'
import { useForm } from '@mantine/form'
import { TextInput, Group, Button, Code } from '@mantine/core'
import { Prisma } from '@prisma/client'
import { useState } from 'react'

const FieldList = ({ langs }: { langs: Prisma.LanguageGetPayload<true>[] }) => {
	const [dataList, setDataList] =
		useState<Pick<typeof langs[0], 'languageName' | 'langCode' | 'id'>[]>(langs)
	// const [fields, setFields] = useState<JSX.Element[]>()
	const form = useForm({
		initialValues: { langs: dataList },
	})
	const handleClickAdd = () => {
		const defaultData = { id: '', languageName: '', langCode: '' }
		form.insertListItem('langs', defaultData)
		setDataList([...dataList, defaultData])
	}

	console.log(dataList)
	// useEffect(() => {
	const fields = dataList.map((item, i) => {
		// console.log(form.getInputProps(`langs.${i}.languageName`))
		return (
			<Group key={item.id || i}>
				<TextInput
					label='Language'
					{...form.getInputProps(`langs.${i}.languageName`)}
				/>
				<TextInput
					label='Language Code'
					{...form.getInputProps(`langs.${i}.langCode`)}
				/>
			</Group>
		)
	})
	// 	setFields(newFields)
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [dataList])

	return (
		<>
			<form>
				{fields} <Button onClick={handleClickAdd}>Add employee</Button>
			</form>
			<Code block>{JSON.stringify(dataList, null, 2)}</Code>
		</>
	)
}

export const Languages = () => {
	const { isSuccess, data: langs } = trpc.useQuery(['lang.getAll'])

	if (!isSuccess) return null
	return <div>{langs && <FieldList langs={langs} />}</div>
}
