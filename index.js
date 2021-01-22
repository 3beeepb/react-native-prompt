import React from 'react'
import {View,Text,TouchableOpacity,Modal,StyleSheet} from 'react-native'

export default Prompt = (props) => {
	const titleText = props.titleText
	const titleTextStyle = props.titleTextStyle || {}
	const cancelText = props.cancelText || 'Cancel'
	const cancelTextStyle = props.cancelTextStyle || {}
	const onCancel = props.onCancel ? props.onCancel : () => {}
	const doneText = props.doneText || 'OK'
	const doneTextStyle = props.doneTextStyle || {}
	const onDone = props.onDone ? props.onDone : () => {}
	const children = props.children || null

	return (
		<Modal animationType={'fade'} hardwareAccelerated={true} transparent={true} visible={true}>
			<View style={styles.container}>
				<View style={styles.containerbox}>
					<Text style={titleTextStyle}>{titleText}</Text>
					<View style={styles.inputcontainer}>
						{children}
					</View>
					<View style={styles.buttons}>
						<TouchableOpacity onPress={() => onCancel()}>
							<Text style={cancelTextStyle}>{cancelText}</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => onDone()}>
							<Text style={doneTextStyle}>{doneText}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#00000050'
	},
	containerbox: {
		width:'80%',
		alignItems:'center',
		justifyContent:'center',
		marginTop:-100,
		padding:20,
		borderRadius:10,
		backgroundColor:'#fff',
		shadowColor:'#000',
		shadowOffset:{width:0,height:2},
		shadowOpacity:.2,
		elevation:8
	},
	buttons: {
		width:'50%',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		marginBottom:10
	},
	inputcontainer: {
		flexDirection:'row',
		alignItems:'center'
	}
})