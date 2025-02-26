import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const commonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: colors.primary,
  },
  drawerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.background,
    letterSpacing: 0.5,
    flex: 1,
  },
  // ... diğer ortak stiller
});
