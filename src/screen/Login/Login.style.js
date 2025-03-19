import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    fontSize: 16,
    height: 50,
    marginBottom: 25,
    borderBottomColor: '#868e96',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    color: '#495057',
    fontWeight: '600',
    marginBottom: 20,
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c6ede',
    paddingVertical: 12,
    borderRadius: 30,
    marginBottom: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#adb5bd',
    borderWidth: 2,
    paddingVertical: 12,
    borderRadius: 30,
  },
  closeButtonText: {
    color: '#495057',
    fontSize: 16,
    fontWeight: '600',
  }
});

export default styles;